import axios from 'axios';
import { BASEURL } from '../config';
import assert from 'assert';

describe("GET /profile", function () {
  it("should need token", function () {
    return axios.get(`${BASEURL}/profile`)
      .then((res) => {
        console.log(res.data);
        assert.equal(res.data.success, false, 'should be false');
      }).catch((res) => {
        console.log(res.data);
        assert.equal(res.data.success, false, 'should be false');
        // throw new Error(res);
      });
  });

  it("should success", function () {
    return axios.get(`${BASEURL}/profile`, {
      params: {
        token: `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJuYW1lIjoidGltIiwiaWF0IjoxNDQ5MDMzMzM1LCJleHAiOjE0NDkxMTk3MzV9.av7zSqHO5lF02tZzYJUTnYDcysyobmthQ2dm0VMHk_c`
      }
    }).then((res) => {
      console.log(res.data);
      assert.equal(typeof res.data.name, 'string', 'name should be String');
    }).catch((res) => {
      throw new Error(res);
    });
  });

});
