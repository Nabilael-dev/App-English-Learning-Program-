import express from 'express';
import { getLessons, createLesson } from '../controllers/lessons';
import { authenticateJWT } from '../middlewares/auth';

const router = express.Router();

router.get('/', authenticateJWT, getLessons);
router.post('/', authenticateJWT, createLesson);

export default router;