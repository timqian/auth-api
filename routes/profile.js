import express from 'express';
import verifyToken from '../utils/verifyToken';
const router = express.Router();

router.get('/', verifyToken, (req, res) => {
  console.log(typeof req.decoded);
  res.json(req.decoded);
});

export default router;
