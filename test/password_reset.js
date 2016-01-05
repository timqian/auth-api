import axios from 'axios';
import assert from 'assert';
import config from './testConfig';

export default function password_reset() {

  describe('POST /password_reset', function () {

    it('reset success', () => {
      return axios.post(`${config.BASEURL}/password_reset`, {
        email: `${config.EMAIL_RECEIVING_VERIFICATION}`,
        password: '123',
      }).then((res) => {
        assert.equal(res.status, 200);
      });
    });
  });
}
