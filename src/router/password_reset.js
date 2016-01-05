import  User    from '../models/User'; // get our mongoose model
import createToken from '../utils/createToken';
import { hashPassword } from '../utils/crypts';
import sendMail from '../utils/sendMail';
import config from '../config';

export default async function(req, res) {

  const { email, password } = req.body;
  const user = await User.findOne( { email } );

  if (!user) {
    res.status(400).json({ success: false, message: config.USER_MESSAGE.USER_NOT_FOUND });
  } else {
    const hashedPassword = await hashPassword(password);
    const token = createToken({ name:user.name, hashedPassword }, config.EMAIL_TOKEN_EXPIRES_IN);
    const verifyAddress =
      `${config.API_URL}/email_verification/?token=${token}`;
    const content = `<a href="${verifyAddress}">
      Click to change your password.
    </a>`;
    const info = await sendMail(email, content).catch((err) => {
      res.status(500).json({ success: false, message: 'email sent error' });
      console.log('Email not sent, err:' + err);
    });

    res.status(200).json({ success: true, message: config.USER_MESSAGE.MAIL_SENT });
    console.log('Email sent: ' + info.response);
  }
}
