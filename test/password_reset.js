import axios from 'axios';
import assert from 'assert';
import config from '../sampleConfig';

export default function password_reset() {

  describe('POST /password_reset', function () {

    it('should return token with name and hashedPassword in the claim', () => {
      console.log('0000000000000000000', config.EMAIL_RECEIVING_VERIFICATION);
      return axios.post(`${config.BASEURL}/password_reset`, {
        email: `${config.EMAIL_RECEIVING_VERIFICATION}`,
        password: '123',
      }).then((res) => {
        assert.equal(res.data.message, config.USER_MESSAGE.MAIL_SENT, 'mail should be sent');
        console.log(config.config);
      }).catch((res) => {
        throw res;
      });
    });
  });
}
