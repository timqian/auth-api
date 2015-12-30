import { Router } from 'express';
import verifyToken from '../utils/verifyToken';



const router = new Router();

router.get('/', verifyToken, (req, res) => {

  if (req.decoded.verified) {
    res.json(req.decoded);
  } else {
    res.json({
      success: false,
      message: global.authApi.NEED_EMAIL_VERIFICATION,
    });
  }

});

export default router;
