import axios from 'axios';
import assert from 'assert';



export default function login() {

  describe('POST /signup', function () {

    it('should return global.authApi.USER_MESSAGE.MAIL_SENT', function () {
      return axios.post(`${global.authApi.BASEURL}/signup`, {
        email: `${Date.now()}@qq.com`,
        name: `tim${Date.now()}`,
        password: '123',
      }).then((res) => {
        // console.log(res.data);
        assert.equal(res.data.message, global.authApi.USER_MESSAGE.MAIL_SENT, 'message mismatch');
      });
    });

    it('should return global.authApi.USER_MESSAGE.NAME_TAKEN(email)', function () {
      return axios.post(`${global.authApi.BASEURL}/signup`, {
        email: `${global.authApi.EMAIL_RECEIVING_VERIFICATION}`,
        name: `timq`,
        password: '123',
      }).then((res) => {
        throw res;
      }).catch((res) => {
        assert.equal(res.data.message, global.authApi.USER_MESSAGE.NAME_TAKEN, 'message mismatch');
      });
    });

    it('should return global.authApi.USER_MESSAGE.NAME_TAKEN(name)', function () {
      return axios.post(`${global.authApi.BASEURL}/signup`, {
        email: 't92@qq.com',
        name: `tim`,
        password: '123',
      }).then((res) => {
        throw res;
      }).catch((res) => {
        assert.equal(res.data.message, global.authApi.USER_MESSAGE.NAME_TAKEN, 'message mismatch');
      });
    });

  });
}
