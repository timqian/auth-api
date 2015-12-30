require('babel-polyfill');

import axios from 'axios';
import login from './login';
import signup from './signup';
import passwordReset from './password_reset';
import config from '../sampleConfig';

describe('Test starts', function () {

  // signup initial user
  before(function() {
    axios.post(`${config.BASEURL}/signup`, {
      email: `${config.EMAIL_RECEIVING_VERIFICATION}`,
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
