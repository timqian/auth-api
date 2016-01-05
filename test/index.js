require('babel-polyfill');

import config from './testConfig';
import axios from 'axios';
import login from './login';
import signup from './signup';
import passwordReset from './password_reset';
import needingToken from './needingToken';
import needingTokenAndEmailVerified from './needingTokenAndEmailVerified';

describe('Test starts', function () {

  // signup initial user
  before(async function() {

    // TODO: clean the database

    await axios.post(`${config.BASEURL}/signup`, {
      email: `${config.EMAIL_RECEIVING_VERIFICATION}`,
      name: `tim`,
      password: '123',
    }).then((res) => {
      console.log('before message:', res.data);
    }).catch((res) => {
      console.log('before message:', res.data);
      // throw res;
    });
  });

  login();
  signup();
  passwordReset();
  needingToken();
  needingTokenAndEmailVerified();
});
