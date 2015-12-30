// used to store config

const sampleConfig = {
  APP_NAME: 'STOCK APP',
  SECRET: 'ilovetim', // jwt secret
  DATABASE: 'mongodb://localhost/database', // mongodb url
  BASEURL: 'http://localhost:3000', // api url
  EXPIRES_IN: 24 * 60 * 60, // token expires time(24 hours)

  EMAIL_SENDER: { // used to send mail by nodemailer
    host: 'smtp.qq.com',
    port: 465,
	  secureConnection: true,
    auth: {
      user: '1912227926@qq.com',
      pass: 'lily1985',
    }
  },

  USER_MESSAGE: { // message sent to client
    MAIL_SENT: 'mail sent',
    NAME_TAKEN: 'Name or email has been taken',
    USER_NOT_FOUND: 'User not found',
    WRONG_PASSWORD: 'wrong password',
    LOGIN_SUCCESS: 'Enjoy your token!',
    NEED_EMAIL_VERIFICATION: 'You need to verify your email first',
  },

  EMAIL_RECEIVING_VERIFICATION: 'timqian92@qq.com',
};

export default sampleConfig;
