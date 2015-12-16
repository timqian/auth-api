import createToken from '../../utils/createToken';
import sendMail from '../../utils/sendMail';
import User from '../../models/User';

import { BASEURL, USER_MESSAGE } from '../../config';
const { MAIL_SENT, NAME_TAKEN } = USER_MESSAGE;

export default function(req, res) {
  const { email, name, password } = req.body;

  // see if name or email is occupied
  User.findOne({ $or: [ { name }, { email } ] }, (err, user) => {
    if (err) throw err;

    if (!user) {
      new User({ email, name, password, verified: false })
      .save((err) => {
        if (err) throw err;

        console.log('____User saved successfully');

        // send verification email
        const token = createToken({ name });
        const verifyAddress =
          `${BASEURL}/emailVerification/?token=${token}`;

        sendMail(email, verifyAddress)
        .then((info) => {
          res.json({ success: true, message: MAIL_SENT });
          console.log('Email sent: ' + info.response);
        })
        .catch((err) => {
          res.json({ success: false, message: 'email sent error' });
          console.log('Email not sent, err:' + err);
        });

      });
    } else {
      console.log('____User not saved, name or email has been taken');
      res.json({ success: false, message: NAME_TAKEN, });
    }
  });
}
