import jwt from 'jsonwebtoken';


export default function(payload) {
  return jwt.sign(payload, global.authApi.SECRET, {
    expiresIn: global.authApi.EXPIRES_IN
  });
}
