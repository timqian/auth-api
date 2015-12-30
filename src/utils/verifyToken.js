/**
 * middleware used to verify token of client
 * NOTE: only with jsonParser,
 */

import jwt from 'jsonwebtoken';
import config from '../config';

export default function (req, res, next) {

  // check header or url parameters or post parameters for token
  const token = req.body.token || req.query.token ||
    req.headers['x-access-token'];

  // decode token
  if (token) {

    // verifies secret and checks exp
    jwt.verify(token, config.SECRET, (err, decoded) => {
      if (err) {
        return res.json({
          success: false,
          message: 'Failed to authenticate token.'
        });
      } else {
        // if everything is good, save to request for use in other routes
        req.decoded = decoded;
        next();
      }
    });

  } else {

    // if there is no token
    // return an error
    return res.status(403).send({
        success: false,
        message: 'No token provided.'
    });

  }
}
