import jwt from 'jsonwebtoken';
import config from '../config';

export default function(payload) {
  return jwt.sign(payload, config.SECRET, {
    expiresIn: config.EXPIRES_IN
  });
}
