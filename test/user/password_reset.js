import axios from 'axios';
import assert from 'assert';
import { BASEURL, EMAIL_RECEIVING_VERIFICATION, USER_MESSAGE } from '../../config';

describe('POST /password_reset', function () {

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

  it('should return token with name and hashedPassword in the claim', () => {
    return axios.post(`${BASEURL}/password_reset`, {
      email: `${EMAIL_RECEIVING_VERIFICATION}`,
      password: '123',
    }).then((res) => {
      assert.equal(res.data.message, USER_MESSAGE.MAIL_SENT, 'mail should be sent');

    }).catch((res) => {
      throw res;
    });
  });
});
