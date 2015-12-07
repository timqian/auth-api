import axios from 'axios';
import { BASEURL } from '../config';
import assert from 'assert';


describe('POST /signup', function () {

  // signup initial user
  before(function() {
    axios.post(`${BASEURL}/signup`, {
      name: `tim`,
      password: '123',
    }).then((res) => {
      console.log(res.data, `.......................`);
    }).catch((res) => {
      throw new Error(res);
    });
  });

  it("should return {success: false, massage: ...}", function () {
    return axios.post(`${BASEURL}/signup`, {
      name: `tim`,
      password: '123',
    }).then((res) => {
      console.log(res.data);
      assert.equal(res.data.success, false, 'success should be false');
    }).catch((res) => {
      throw new Error(res);
    });
  });

  it('should return json: {success: true}', function () {
    return axios.post(`${BASEURL}/signup`, {
      name: `${new Date()}tim`,
      password: '123',
    }).then((res) => {
      console.log(res.data);
      assert.equal(res.data.success, true, 'success should be true')
    }).catch((res) => {
      throw new Error(res);
    });
  });
});

describe("POST /login", function () {
  it("should return {success: true, token: ...}", function () {
    return axios.post(`${BASEURL}/login`, {
      name: 'tim',
      password: '123',
    }).then((res) => {
      console.log(res.data);
      assert.equal(res.data.success, true, 'success should be true');
      assert.notEqual(res.data.token, null, 'token should exist')
    }).catch((res) => {
      throw new Error(res);
    });
  });
});
