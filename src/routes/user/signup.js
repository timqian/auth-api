import createToken from '../../utils/createToken';
import sendMail from '../../utils/sendMail';
import User from '../../models/User';
import { hashPassword } from '../../utils/crypts';



export default async function(req, res) {
  const { email, name, password } = req.body;

  if ( !name || !password || !email ) {
    res.status(400).json({ success: false, message: 'info not enough', });
  }

  // see if name or email is occupied
  const user = await User.findOne({ $or: [ { name }, { email } ] });

  if (!user) {
    const hashedPassword = await hashPassword(password);
    await new User({ email, name, password: hashedPassword, verified: false }).save();

    console.log('____User saved');

    // send verification email
    const token = createToken({ name });
    const verifyAddress =
      `${global.authApi.BASEURL}/email_verification/?token=${token}`;
    const content = `<a href="${verifyAddress}">
       Click to verify your email address.
     </a>`;
    const info = await sendMail(email, content).catch((err) => {
      res.status(500).json({ success: false, message: 'email sent error' });
      console.log('Email not sent, err:' + err);
    });

    res.json({ success: true, message: global.authApi.USER_MESSAGE.MAIL_SENT });
    console.log('Email sent: ' + info.response);


  } else {
    console.log('____User not saved, name or email has been taken');
    res.status(400).json({ success: false, message: global.authApi.USER_MESSAGE.NAME_TAKEN, });
  }

}
