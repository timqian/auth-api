import axios from 'axios';
import assert from 'assert';
import config from './testConfig';

export default function password_reset() {

  let token = '';

  describe('GET /needingTokenAndEmailVerified', function () {

    before(async function() {
      const loginRes = await axios.post(`${config.BASEURL}/login`, {
        name: 'tim',
        password: '123',
      }).catch((res) => { throw res.data; });

      token = loginRes.data.token;
    });

    it('should need token', function () {
      return axios.get(`${config.BASEURL}/needingTokenAndEmailVerified`)
        .then((res) => {
          throw res;
        }).catch((res) => {
          // console.log(res.data);
          assert.equal(res.data.success, false, 'should be false');
        });
    });

    it('should need email verified', function () {
      return axios.get(`${config.BASEURL}/needingTokenAndEmailVerified`, {params: {token}})
        .then((res) => { throw res; })
        .catch((res) => {
          assert.equal(res.status, 400);
        });
    });

    // it('should success', function  () {
    //   return User.findOne({name: 'tim'}, (err, user) => {
    //     user.verified = true;
    //     user.save((err) => {
    //       if (err) throw err;
    //
    //     })
    //   })
    // });

  });
}
