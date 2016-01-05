import { createTransport } from 'nodemailer';
import config from '../config';
// create reusable transporter object using SMTP transport

/**
 * to: mail
 * verifyAddress:
 */
export default function sendMail(targetAddress, content) {
  // NB! No need to recreate the transporter object. You can use
  // the same transporter object for all e-mails
  const transporter = createTransport(config.EMAIL_SENDER, {
    // default values for sendMail method
    from: `${config.APP_NAME} <${config.EMAIL_SENDER.auth.user}>`,
    // headers: {
    //   'My-Awesome-Header': '123'
    // }
  });

  // setup e-mail data with unicode symbols
  let mailOptions = {
      to: `${targetAddress}`,        // list of receivers
      subject: 'Email verification', // Subject line
      html: `${content}`,
  };

  // console.log('sendMail', mailOptions);
  // send mail with defined transport object
  return transporter.sendMail(mailOptions);
}
