import mongoose, { Schema, Document } from 'mongoose';

export interface ILesson extends Document {
  title: string;
  level: '5-6' | '7-9' | '10-12';
  description: string;
  videoUrl?: string;
  activities: any[];
  createdBy: mongoose.Types.ObjectId;
}

const LessonSchema = new Schema<ILesson>({
  title: { type: String, required: true },
  level: { type: String, enum: ['5-6', '7-9', '10-12'], required: true },
  description: String,
  videoUrl: String,
  activities: [Schema.Types.Mixed],
  createdBy: { type: Schema.Types.ObjectId, ref: 'User', required: true },
}, { timestamps: true });

export default mongoose.model<ILesson>('Lesson', LessonSchema);