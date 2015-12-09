## REST api server starter (using JWT, express and mongoose)

### Main tools used:

[`JWT`](https://github.com/auth0/node-jsonwebtoken), [`express`](strongloop/express), [`mongoose`](https://github.com/Automattic/mongoose), [`axios`](https://github.com/mzabriskie/axios), [`nodemailer`](https://github.com/andris9/Nodemailer)

### How to start:

0. install `mongodb ， nodemon, babel(5.8.34)` globaly
1. start mongodb: `mongod --dbpath YourDBPath`;
2. in `config.js`, change `DATABASE` to `YourDBPath` and set your `SECRET`
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

https://github.com/timqian/jwtAuth-RESTful-server-starter/blob/1.0/%E7%AC%AC%E4%B8%80%E7%89%88API%20description.md

### TODOs:

- [ ]  checkout using email: https://github.com/andris9/Nodemailer
- [ ]  password bcrypt：https://github.com/ncb000gt/node.bcrypt.js/
- [ ]  reset password
