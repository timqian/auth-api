import jwt from 'jsonwebtoken';
import config from '../config';

export default function(payload, expiresIn) {
  return jwt.sign(payload, config.SECRET, { expiresIn });
}
