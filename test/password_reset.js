import axios from 'axios';
import assert from 'assert';


export default function password_reset() {

  describe('POST /password_reset', function () {

    it('should return token with name and hashedPassword in the claim', () => {
      console.log('0000000000000000000', global.authApi.EMAIL_RECEIVING_VERIFICATION);
      return axios.post(`${global.authApi.BASEURL}/password_reset`, {
        email: `${global.authApi.EMAIL_RECEIVING_VERIFICATION}`,
        password: '123',
      }).then((res) => {
        assert.equal(res.data.message, global.authApi.USER_MESSAGE.MAIL_SENT, 'mail should be sent');
        console.log(config.config);
      }).catch((res) => {
        throw res;
      });
    });
  });
}
