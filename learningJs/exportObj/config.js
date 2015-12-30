export default (function() {
  const config = {
    APP_NAME: 'TEST',
    SECRET: 'ilovetim', // jwt secret
    DATABASE: 'mongodb://localhost/database', // mongodb url
    BASEURL: 'http://localhost:3000', // api url
    EXPIRES_IN: 24 * 60 * 60, // token expires time(24 hours)

    EMAIL_SENDER: { // used to send mail by nodemailer
      service: 'Gmail',
      auth: {
        user: 'qianlijiang123@gmail.com',
        pass: '321qianqian',
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

  function init (userConfig) {
    Object.keys(userConfig).forEach((key) => {
      if (key) config[key] = this[key];
    });
  }

  return {
    config,
    init,
  };
})();
