import express from 'express';
import { login, register, getMe } from '../controllers/auth';
import { authenticateJWT } from '../middlewares/auth';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/me', authenticateJWT, getMe);

export default router;