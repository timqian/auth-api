import { genSalt, hash, compare } from 'bcrypt';
import promisify from 'es6-promisify';

const genSaltAsync = promisify(genSalt);
const hashAsync = promisify(hash);
const compareAsync = promisify(compare);

export async function hashPassword(password) {
  const salt = await genSaltAsync(10);
  const hash = await hashAsync(password, salt);
  return hash;
}

export async function checkPassword(password, hash) {
  const res = await compareAsync(password, hash);
  return res;
}
