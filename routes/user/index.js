import { Router } from 'express';

import signup from './signup';
import login from './login';
import emailVerification from './emailVerification';

const router = Router();

router.post('/signup', signup);
router.get('/emailVerification', emailVerification);
router.post('/login', login);

export default router;
