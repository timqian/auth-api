import axios from 'axios';
import assert from 'assert';

import { BASEURL, USER_MESSAGE, EMAIL_RECEIVING_VERIFICATION }
  from '../../config';

const { USER_NOT_FOUND, WRONG_PASSWORD} = USER_MESSAGE;


describe('POST /user/login', function () {

  // signup initial user
  before(function() {
    axios.post(`${BASEURL}/user/signup`, {
      email: `${EMAIL_RECEIVING_VERIFICATION}`,
      name: `tim`,
      password: '123',
    }).then((res) => {
      console.log('before message:', res.data);
    }).catch((res) => {
      throw new Error(res);
    });
  });

  it('should success', function () {
    return axios.post(`${BASEURL}/user/login`, {
      name: 'tim',
      password: '123',
    }).then((res) => {
      assert.equal(res.data.success, true, 'success should be true');
      assert.notEqual(res.data.token, null, 'token should exist');
    }).catch((res) => {
      throw new Error(res);
    });
  });

  it('should success', function () {
    return axios.post(`${BASEURL}/user/login`, {
      email: `${EMAIL_RECEIVING_VERIFICATION}`,
      password: '123',
    }).then((res) => {
      assert.equal(res.data.success, true, 'success should be true');
      assert.notEqual(res.data.token, null, 'token should exist');
    }).catch((res) => {
      throw new Error(res);
    });
  });

  it('should return USER_NOT_FOUND', function () {
    return axios.post(`${BASEURL}/user/login`, {
      name: `tim${Date.now()}`,
      password: '123',
    }).then((res) => {
      assert.equal(res.data.message, USER_NOT_FOUND, 'message mismatch');
    }).catch((res) => {
      throw new Error(res);
    });
  });

  it('should return USER_NOT_FOUND', function () {
    return axios.post(`${BASEURL}/user/login`, {
      email: `tim${Date.now()}@qq.com`,
      password: '123',
    }).then((res) => {
      assert.equal(res.data.message, USER_NOT_FOUND, 'message mismatch');
    }).catch((res) => {
      throw new Error(res);
    });
  });

  it('should return WRONG_PASSWORD', function () {
    return axios.post(`${BASEURL}/user/login`, {
      name: `tim`,
      password: '1234',
    }).then((res) => {
      assert.equal(res.data.message, WRONG_PASSWORD, 'message mismatch');
    }).catch((res) => {
      throw new Error(res);
    });
  });

  it('should return WRONG_PASSWORD', function () {
    return axios.post(`${BASEURL}/user/login`, {
      email: `${EMAIL_RECEIVING_VERIFICATION}`,
      password: '1234',
    }).then((res) => {
      assert.equal(res.data.message, WRONG_PASSWORD, 'message mismatch');
    }).catch((res) => {
      throw new Error(res);
    });
  });
});
