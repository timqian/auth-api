import { Router } from 'express';
import verifyToken from '../utils/verifyToken';

import { USER_MESSAGE } from '../config';
const { NEED_EMAIL_VERIFICATION } = USER_MESSAGE;

const router = new Router();

router.get('/', verifyToken, (req, res) => {

  if (req.decoded.verified) {
    res.json(req.decoded);
  } else {
    res.json({
      success: false,
      message: NEED_EMAIL_VERIFICATION,
    });
  }

});

export default router;
