## REST api server starter (using JWT, express and mongoose)

### Main tools used:

[`JWT`](https://github.com/auth0/node-jsonwebtoken), [`express`](strongloop/express), [`mongoose`](https://github.com/Automattic/mongoose), [`axios`](https://github.com/mzabriskie/axios), [`nodemailer`](https://github.com/andris9/Nodemailer)

### How to start:

0. install `mongodb ， nodemon, babel(5.8.34)` globaly
1. start mongodb: `mongod --dbpath YourDBPath`;
2. in `config.js`

    1. change `DATABASE` to `YourDBPath`
    2. set your `SECRET`
    3. set your `EMAIL_SENDER` used to send verification email
    4. set your `EMAIL_RECEIVING_VERIFICATION` to accept verification email(for test)

3. run the server: `npm start`

### test:

run `npm test`

I tested the api using [axios](https://github.com/mzabriskie/axios).
Axios is an HTTP client for the browser and node.js. This means you can resuse the code in your web app to do ajax requests.

### What does this starter do for you

1. sign up (with email verification(using JWT))
2. login (use name and password)
3. middleware to verify user for private route(using JWT)


### API description

TODO

### TODOs:

- [x]  verify email address: https://github.com/andris9/Nodemailer
token：http://jonatan.nilsson.is/stateless-tokens-with-jwt/
way：https://www.v2ex.com/t/100736
- [ ] password bcrypt：https://github.com/ncb000gt/node.bcrypt.js/ blog: http://devsmash.com/blog/password-authentication-with-mongoose-and-bcrypt
- [ ] reset password
- [ ] write api doc by [apidoc](https://github.com/apidoc/apidoc)
- [x] promisify
- [ ] https

### Untested routes:

- user/emialVerification
- /needingTokenAndEmailVerified  (with email verified)
