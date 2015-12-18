import createToken from '../../utils/createToken';
import sendMail from '../../utils/sendMail';
import User from '../../models/User';
import { hashPassword } from '../../utils/crypts';

import { BASEURL, USER_MESSAGE } from '../../config';
const { MAIL_SENT, NAME_TAKEN } = USER_MESSAGE;

export default async function(req, res) {
  const { email, name, password } = req.body;

  // see if name or email is occupied
  const user = await User.findOne({ $or: [ { name }, { email } ] });

  if (!user) {
    const hashedPassword = await hashPassword(password);
    await new User({ email, name, password: hashedPassword, verified: false }).save();

    console.log('____User saved successfully');

    // send verification email
    const token = createToken({ name });
    const address =
      `${BASEURL}/emailVerification/?token=${token}`;

    sendMail(email, address)
      .then((info) => {
        res.json({ success: true, message: MAIL_SENT });
        console.log('Email sent: ' + info.response);
      })
      .catch((err) => {
        res.json({ success: false, message: 'email sent error' });
        console.log('Email not sent, err:' + err);
      });

  } else {
    console.log('____User not saved, name or email has been taken');
    res.json({ success: false, message: NAME_TAKEN, });
  }

}
