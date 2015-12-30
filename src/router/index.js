import { Router } from 'express';
import signup from './signup';
import login from './login';
import email_verification from './email_verification';
import password_reset from './password_reset';
import verifyToken from '../utils/verifyToken';

const router = new Router();

router.post('/signup', signup);
router.get('/email_verification', verifyToken, email_verification);
router.post('/login', login);
router.post('/password_reset', password_reset);

export default router;
