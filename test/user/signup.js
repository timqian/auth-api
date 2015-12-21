import axios from 'axios';
import assert from 'assert';

import { BASEURL, USER_MESSAGE, EMAIL_RECEIVING_VERIFICATION }
  from '../../config';

const { MAIL_SENT, NAME_TAKEN } = USER_MESSAGE;

describe('POST /signup', function () {

  // signup initial user
  before(function() {
    axios.post(`${BASEURL}/signup`, {
      email: `${EMAIL_RECEIVING_VERIFICATION}`,
      name: `tim`,
      password: '123',
    }).then((res) => {
      console.log('before message:', res.data);
    }).catch((res) => {
      console.log('before message:', res.data);
    });
  });

  it('should return MAIL_SENT', function () {
    return axios.post(`${BASEURL}/signup`, {
      email: `${Date.now()}@qq.com`,
      name: `tim${Date.now()}`,
      password: '123',
    }).then((res) => {
      // console.log(res.data);
      assert.equal(res.data.message, MAIL_SENT, 'message mismatch');
    });
  });

  it('should return NAME_TAKEN(email)', function () {
    return axios.post(`${BASEURL}/signup`, {
      email: `${EMAIL_RECEIVING_VERIFICATION}`,
      name: `timq`,
      password: '123',
    }).then((res) => {
      throw res;
    }).catch((res) => {
      assert.equal(res.data.message, NAME_TAKEN, 'message mismatch');
    });
  });

  it('should return NAME_TAKEN(name)', function () {
    return axios.post(`${BASEURL}/signup`, {
      email: 't92@qq.com',
      name: `tim`,
      password: '123',
    }).then((res) => {
      throw res;
    }).catch((res) => {
      assert.equal(res.data.message, NAME_TAKEN, 'message mismatch');
    });
  });

});
