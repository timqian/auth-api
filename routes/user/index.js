import { Router } from 'express';

import signup from './signup';
import login from './login';

const router = Router();

router.post('/signup', signup);
router.post('/login', login);

export default router;
