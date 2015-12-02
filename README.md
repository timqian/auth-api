## REST api server starter (using JWT, express and mongoose)

### Technologies used:

[`JWT`](https://github.com/auth0/node-jsonwebtoken), [`express`](strongloop/express), [`mongoose`](https://github.com/Automattic/mongoose), [`axios`](https://github.com/mzabriskie/axios)

### How to start:

0. install mongodb ， nodemon
1. start mongodb: `mongod --dbpath YourDBPath`;
2. in `config.js`, change `DATABASE` to `YourDBPath` and set your `SECRET`
3. run the server: `npm start`

### test:

run `npm test`

I tested the api using [axios](https://github.com/mzabriskie/axios).
Axios is an HTTP client for the browser and node.js. This means you can resuse the code in your web app to do ajax requests.

### TODOs:

- [ ]  checkout using email
- [ ]  password bcrypt：https://github.com/ncb000gt/node.bcrypt.js/
