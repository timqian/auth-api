import { Router } from 'express';

import signup from './signup';
import login from './login';
import emailVerification from './emailVerification';
import verifyToken from '../../utils/verifyToken';

const router = new Router();

router.post('/signup', signup);
router.get('/emailVerification', verifyToken, emailVerification);
router.post('/login', login);

export default router;
