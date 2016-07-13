## Purpose

Reuse authentication part code of REST server, easily and flexibly.
Thanks to `express.Router`.

## Features

- [jwt](https://github.com/auth0/node-jsonwebtoken) to verify user;
- [nodemailer](https://github.com/nodemailer/nodemailer) to send verification emails;
- [mongoose](https://github.com/Automattic/mongoose) to drive mongodb (user model: https://github.com/timqian/auth-api/blob/master/src/models/User.js);
- [axios](https://github.com/mzabriskie/axios) to test RESTful api (axios can be used both on browser and node, that means the test code can be reused in your web app);

## Sample usage:

1. Install `auth-api` and his peerDependencies:

  `npm install auth-api express body-parser mongoose --save`

2. Run the sample code below and boom~~ the auth server will be listening at `http://localhost:3000`

```javascript
var authApi        = require('auth-api');
var express        = require('express');
var bodyParser     = require('body-parser');
var mongoose       = require('mongoose');

mongoose.connect('mongodb://localhost/database'); // connect to database

var userConfig = {
  APP_NAME: 'STOCK APP',
  SECRET: 'ilovetim',                             // jwt secret
  CLIENT_TOKEN_EXPIRES_IN: 60 * 24 * 60 * 60,     // client token expires time(60day)
  EMAIL_TOKEN_EXPIRES_IN: 24 * 60 * 60,           // email token expires time(24h)

  EMAIL_SENDER: {                                 // used to send mail by nodemailer
    service: 'Gmail',
    auth: {
      user: 'qianlijiang123@gmail.com',
      pass: '321qianqian',
    }
  },

  USER_MESSAGE: {                                 // message sent to client
    MAIL_SENT: 'mail sent',
    NAME_TAKEN: 'Name or email has been taken',
    USER_NOT_FOUND: 'User not found',
    WRONG_PASSWORD: 'wrong password',
    LOGIN_SUCCESS: 'Enjoy your token!',
    NEED_EMAIL_VERIFICATION: 'You need to verify your email first',
  },

  API_URL: 'http://localhost:3000'              // to be used in the mail
};

authApi.init(userConfig);

var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', authApi.authRouter);

// protecting api
app.get('/needingToken', authApi.verifyToken, (req, res) => {

  // send back the jwt claim directly
  var claim = req.decoded;
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

(es6 sample: https://github.com/timqian/auth-api/blob/master/testServer.js)

## What does the above code do for you

1. Generate the following auth api for you at `http://localhost:3000`


|Method| url                 | data(if needed)                              | server action(if request is good) |
| ---- |---------------------| ---------------------------------------------| -------------|
| POST | /signup             | {name: ..., email: ..., password: ...}       |create a user in mongodb and send verification email |
| POST | /login              | {name/email: ..., password: ...}             |check user and return jwt token|
| POST | /password_reset     | {email: ..., password(the new password): ...}| send verification link to email |
| GET  | /email_verification |                                              | verify token and change password |

(more details in the code)


## Module api

- `authApi.init(config)`: configure the module
- `authApi.authRouter`: an express router I wrote for you
- `authApi.verifyToken`: an express middleware used to verify token sent by client

## TODOS

- [ ] better http status code
- [ ] better config params
- [ ] docs
- [ ] new feature

## license

  MIT

### As a starter see the [starter branch](https://github.com/timqian/auth-api/tree/jwtAuth-RESTful-server-starter-2.0)

[![paypal donate][paypal-image]][paypal-url]
[paypal-image]: https://www.paypal.com/en_US/i/btn/btn_donate_SM.gif
[paypal-url]: https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=timqian92@qq.com&currency_code=USD&amount=1&return=https://github.com/timqian&item_name=timqian&undefined_quantity=1&no_note=0
