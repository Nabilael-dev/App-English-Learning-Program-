import express from 'express';
import { getProgress, createProgress } from '../controllers/progress';
import { authenticateJWT } from '../middlewares/auth';

const router = express.Router();

router.get('/:studentId', authenticateJWT, getProgress);
router.post('/', authenticateJWT, createProgress);

export default router;