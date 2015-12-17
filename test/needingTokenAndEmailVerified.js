import axios from 'axios';
import assert from 'assert';

import { BASEURL, USER_MESSAGE, EMAIL_RECEIVING_VERIFICATION }
  from '../config';

const { NEED_EMAIL_VERIFICATION } = USER_MESSAGE;

let token = '';

describe('GET /needingTokenAndEmailVerified', function () {

  before(async function() {
    const signupRes = await axios.post(`${BASEURL}/signup`, {
      email: `${EMAIL_RECEIVING_VERIFICATION}`,
      name: `tim`,
      password: '123',
    }).catch((e) => { throw e; });

    const loginRes = await axios.post(`${BASEURL}/login`, {
      name: 'tim',
      password: '123',
    }).catch((e) => { throw e; });

    token = loginRes.data.token;
  });

  it('should need token', function () {
    return axios.get(`${BASEURL}/needingTokenAndEmailVerified`)
      .then((res) => {
        throw res;
      }).catch((res) => {
        // console.log(res.data);
        assert.equal(res.data.success, false, 'should be false');
      });
  });

  it('should need email verified', function () {
    return axios.get(`${BASEURL}/needingTokenAndEmailVerified`, {params: {token}})
      .then((res) => {
        assert.equal(res.data.success, false, 'should be false');
        assert.equal(res.data.message, NEED_EMAIL_VERIFICATION, 'shoud need email verification');
      }).catch((e) => { throw e; });
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
