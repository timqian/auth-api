import axios from 'axios';
import assert from 'assert';
import config from './testConfig';


export default function login() {

  describe('POST /signup', function () {

    // it('signup success', function () {
    //   return axios.post(`${config.BASEURL}/signup`, {
    //     email: `${Date.now()}@qq.com`,
    //     name: `tim${Date.now()}`,
    //     password: '123',
    //   }).then((res) => {
    //     assert.equal(res.status, 200);
    //   });
    // });

    it('email taken', function () {
      return axios.post(`${config.BASEURL}/signup`, {
        email: `${config.EMAIL_RECEIVING_VERIFICATION}`,
        name: `timq`,
        password: '123',
      }).then((res) => {
        throw res;
      }).catch((res) => {
        assert.equal(res.status, 400);
      });
    });

    it('name taken', function () {
      return axios.post(`${config.BASEURL}/signup`, {
        email: 't92@qq.com',
        name: `tim`,
        password: '123',
      }).then((res) => {
        throw res;
      }).catch((res) => {
        assert.equal(res.status, 400);
      });
    });

  });
}
