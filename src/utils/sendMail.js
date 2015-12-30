import { createTransport } from 'nodemailer';
import config from '../config';

// create reusable transporter object using SMTP transport
const transporter = createTransport(config.EMAIL_SENDER);

/**
 * to: mail
 * verifyAddress:
 */
export default function sendMail(targetAddress, content) {
  // NB! No need to recreate the transporter object. You can use
  // the same transporter object for all e-mails
  console.log(typeof email);

  // setup e-mail data with unicode symbols
  let mailOptions = {
      from: `${config.APP_NAME} ✔ <${config.EMAIL_SENDER.auth.sender}>`, // sender address
      to: `${targetAddress}`,                              // list of receivers
      subject: 'Email verification', // Subject line
      html: `${content}`,
  };

  // send mail with defined transport object
  return transporter.sendMail(mailOptions);
}
