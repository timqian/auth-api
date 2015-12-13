export const SECRET = 'ilovetim'; // jwt secret
export const DATABASE = 'mongodb://localhost/database'; // mongodb url
export const BASEURL = 'http://localhost:8080'; // api url
export const EXPIRES_IN = 24 * 60 * 60; // token expires time(24 hours)

export const EMAIL_SENDER = { // used to send mail by nodemailer
  service: 'Gmail',
  auth: {
    user: 'qianlijiang123@gmail.com',
    pass: '321qianqian'
  }
};

export const USER_MESSAGE = { // message sent to client
  MAIL_SENT: 'mail sent',
  NAME_TAKEN: 'Name or email has been taken',
  USER_NOT_FOUND: 'User not found',
  WRONG_PASSWORD: 'wrong password',
  NEED_EMAIL_VERIFICATION: 'You need to verify your email first',
};

export const EMAIL_RECEIVING_VERIFICATION = 'timqian92@qq.com';
