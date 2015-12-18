import { hashPassword, checkPassword} from '../crypts';

(async function() {
  const passHash = await hashPassword('123');
  const res = await checkPassword('123', passHash);
  console.log(res);
})();
