import jwt from 'jsonwebtoken';
import { SECRET, EXPIRES_IN }  from '../config';

export default function(payload) {
  return jwt.sign(payload, SECRET, {
    expiresIn: EXPIRES_IN
  });
}
