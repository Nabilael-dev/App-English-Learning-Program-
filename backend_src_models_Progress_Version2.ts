import mongoose, { Schema, Document } from 'mongoose';

export interface IProgress extends Document {
  student: mongoose.Types.ObjectId;
  week: number;
  focus: string;
  social: string;
  creative: string;
  notes?: string;
}

const ProgressSchema = new Schema<IProgress>({
  student: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  week: { type: Number, required: true },
  focus: String,
  social: String,
  creative: String,
  notes: String,
}, { timestamps: true });

export default mongoose.model<IProgress>('Progress', ProgressSchema);