import { Request, Response } from 'express';
import Progress from '../models/Progress';

export async function getProgress(req: Request, res: Response) {
  const { studentId } = req.params;
  const progress = await Progress.find({ student: studentId });
  res.json(progress);
}

export async function createProgress(req: Request, res: Response) {
  const progress = await Progress.create(req.body);
  res.status(201).json(progress);
}