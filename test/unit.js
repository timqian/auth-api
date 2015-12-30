require('babel-polyfill');

import axios from 'axios';

import login from './login';
import signup from './signup';
import passwordReset from './password_reset';
// import email_verification from 'email_verification';

describe('Test starts', function () {

  // signup initial user
  before(function() {
    axios.post(`${global.authApi.BASEURL}/signup`, {
      email: `${global.authApi.EMAIL_RECEIVING_VERIFICATION}`,
      name: `tim`,
      password: '123',
    }).then((res) => {
      console.log('before message:', res.data);
    }).catch((res) => {
      console.log('before message:', res.data);
    });
  });

  login();
  signup();
  passwordReset();
});
