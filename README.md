## REST api server starter (using JWT, express and mongoose)

### Technologies used:

`JWT`, `express`, `mongoose`

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

- [ ]: 邮件注册功能
- [ ]: password 存之前加密一下：https://github.com/ncb000gt/node.bcrypt.js/
