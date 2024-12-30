import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IFile {
  name: string;
  link: string;
}

export interface INewssell extends Document {
  title: string;
  description: string;
  files: IFile[];
  image: string; // URL ของรูปภาพ
  createdAt: Date;
}

const FileSchema = new Schema<IFile>({
  name: { type: String, required: true },
  link: { type: String, required: true },
});

const NewssellSchema = new Schema<INewssell>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  files: { type: [FileSchema], required: true },
  image: { type: String, required: false }, // ไม่บังคับ
  createdAt: { type: Date, default: Date.now },
});

export const NewssellModel: Model<INewssell> =
  mongoose.models.Newssell || mongoose.model<INewssell>('Newssell', NewssellSchema);
