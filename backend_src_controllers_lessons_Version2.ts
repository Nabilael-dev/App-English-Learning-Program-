import { Request, Response } from 'express';
import Lesson from '../models/Lesson';

export async function getLessons(req: Request, res: Response) {
  const lessons = await Lesson.find();
  res.json(lessons);
}

export async function createLesson(req: Request, res: Response) {
  const lesson = await Lesson.create({ ...req.body, createdBy: req.user.id });
  res.status(201).json(lesson);
}