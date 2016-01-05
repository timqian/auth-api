import axios from 'axios';
import assert from 'assert';
import config from './testConfig';

export default function login() {
  describe('POST /login', function () {

    it('name login', function () {
      return axios.post(`${config.BASEURL}/login`, {
        name: 'tim',
        password: '123',
      }).then((res) => {
        assert.equal(res.status, 200);
      });
    });

    it('email login', function () {
      return axios.post(`${config.BASEURL}/login`, {
        email: `${config.EMAIL_RECEIVING_VERIFICATION}`,
        password: '123',
      }).then((res) => {
        assert.equal(res.status, 200);
      });
    });

    it('wrong user name', function () {
      return axios.post(`${config.BASEURL}/login`, {
        name: `tim${Date.now()}`,
        password: '123',
      }).then((res) => {
        throw res;
      }).catch((res) => {
        assert.equal(res.status, 400);
      });
    });

    it('wrong email', function () {
      return axios.post(`${config.BASEURL}/login`, {
        email: `tim${Date.now()}@qq.com`,
        password: '123',
      }).then((res) => {
        throw res;
      }).catch((res) => {
        assert.equal(res.status, 400);
      });
    });

    it('wrong password with name', function () {
      return axios.post(`${config.BASEURL}/login`, {
        name: `tim`,
        password: '1234',
      }).then((res) => {
        throw res;
      }).catch((res) => {
        assert.equal(res.status, 400);
      });
    });

    it('wrong password with email', function () {
      return axios.post(`${config.BASEURL}/login`, {
        email: `${config.EMAIL_RECEIVING_VERIFICATION}`,
        password: '1234',
      }).then((res) => {
        throw res;
      }).catch((res) => {
        assert.equal(res.status, 400);
      });
    });
  });
}
