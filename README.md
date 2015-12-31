Working on it

As a starter see the starter branch: https://github.com/timqian/auth-api/tree/jwtAuth-RESTful-server-starter-2.0

## Why did I made this module

In order to reuse authentication part code of REST server(as a module), easily and flexibly.
Thanks to `express.Router`.

## Sample usage:

1. Install `auth-api` and his peerDependencies:

  `npm install auth-api express body-parser mongoose --save`

2. Run the sample code below and boom~~ the auth server will be listening at `http://localhost:3000`

  ```javascript
  import authApi        from 'auth-api';
  import express        from 'express';
  import bodyParser     from 'body-parser';
  import mongoose       from 'mongoose';

  mongoose.connect('mongodb://localhost/database'); // connect to database

  const sampleConfig = {
    APP_NAME: 'STOCK APP',
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
  }

  authApi.init(sampleConfig);

  const app = express();
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use('/', authApi.authRouter);
  app.listen(3000);
  console.log('API magic happens at http://localhost:3000');
  ```

## What does the above code do for you

1. Generate the following auth api for you at `http://localhost:3000`

TODO: use apidoc

|Method| url                 | data(if needed)                              | server action |
| ---- |---------------------| ---------------------------------------------| -------------|
| POST | /signup             | {name: ..., email: ..., password: ...}       |               |
| POST | /login              | {name/email: ..., password: ...}             |              |
| POST | /password_reset     | {email: ..., password(the new password): ...}|              |
| GET  | /email_verification |                                              |              |



## Module api

- `authApi.init(config)`: configure the module
- `authApi.authRouter`: an express router I wrote for you
- `authApi.verifyToken`: used to verify token sent by client

## RESTful API provided by `authApi.authRouter`:

|Method| url                 | data(if needed)                              |
| ---- |:-------------------:| --------------------------------------------:|
| POST | /signup             | {name: ..., email: ..., password: ...}       |
| POST | /login              | {name/email: ..., password: ...}             |
| POST | /password_reset     | {email: ..., password(the new password): ...}|
| GET  | /email_verification |                                              |click link in the mail

For detail usage you can look into the test folder(unfinished up to now)

## TODOS

- [ ] better config params
- [ ] complete test code
- [ ] docs
- [ ] new feature


## Contribution

I am new to auth. So there might be much problem in this module, from auth procedure to implementing detail. If your find any mistake I made, please tell me.
