Working on it

As a starter see the starter branch: https://github.com/timqian/auth-api/tree/jwtAuth-RESTful-server-starter-2.0

## What is this module for?

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
import methodOverride from 'method-override';
import morgan         from 'morgan';
import mongoose       from 'mongoose';

mongoose.connect('mongodb://localhost/database'); // connect to database

const userConfig = {
  APP_NAME: 'STOCK APP',
  SECRET: 'ilovetim', // jwt secret
  CLIENT_TOKEN_EXPIRES_IN: 60 * 24 * 60 * 60,          // client token expires time(60day)
  EMAIL_TOKEN_EXPIRES_IN: 24 * 60 * 60,           // email token expires time(24h)

  EMAIL_SENDER: {                             // used to send mail by nodemailer
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

  API_URL: 'http://localhost:3000'             // to be used in the mail
};

authApi.init(userConfig);

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(morgan('dev'));
app.use('/', authApi.authRouter);

// protecting api
app.get('/needingToken', authApi.verifyToken, (req, res) => {

  // send back the jwt claim directly
  const claim = req.decoded;
  res.status(200).json(claim);
});

app.get('/needingTokenAndEmailVerified', authApi.verifyToken, (req, res) => {
  if (req.decoded.verified) {
    res.status(200).json(req.decoded);
  } else {
    res.status(400).json({
      success: false,
      message: 'Please verify your email before doing this!'
    });
  }
});


app.listen(3000);
console.log('API magic happens at http://localhost:3000');

// handle unhandled promise rejection
// https://nodejs.org/api/process.html#process_event_unhandledrejection
process.on('unhandledRejection', function(reason, p) {
    console.log('Unhandled Rejection at: Promise ', p, ' reason: ', reason);
    // application specific logging, throwing an error, or other logic here
});
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

- [ ] better http status code
- [ ] better config params
- [ ] complete test code
- [ ] docs
- [ ] new feature


## Contribution

I am new to auth. So there might be much problem in this module, from auth procedure to implementing detail. If your find any mistake I made, please tell me.
