import mongoose, { Schema, Document } from 'mongoose';

export type Role = 'student' | 'parent' | 'teacher' | 'admin';

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  role: Role;
  children?: mongoose.Types.ObjectId[];
}

const UserSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['student', 'parent', 'teacher', 'admin'], default: 'student' },
  children: [{ type: Schema.Types.ObjectId, ref: 'User' }],
});

export default mongoose.model<IUser>('User', UserSchema);