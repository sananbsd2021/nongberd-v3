import mongoose, { Schema, model, models, Document } from 'mongoose';

interface IStudent extends Document {
  fristname: string;
  lastname: string;
  glevel: string;
  grade: string;
  age: string;
  createdAt: Date;
}

const StudentSchema = new Schema<IStudent>({
  fristname: { type: String, required: true },
  lastname: { type: String, required: true },
  glevel: { type: String },
  grade: { type: String },
  age: { type: String },
  createdAt: { type: Date, default: Date.now },
});

const Student = models.Student || model<IStudent>('Student', StudentSchema);

export default Student;
