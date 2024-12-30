import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IFile {
  name: string;
  link: string;
}

export interface IGallery extends Document {
  title: string;
  description: string;
  files: IFile[];
  photo: string; // URL ของรูปภาพ
  createdAt: Date;
}

const FileSchema = new Schema<IFile>({
  name: { type: String, required: true },
  link: { type: String, required: true },
});

const GallerySchema = new Schema<IGallery>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  files: { type: [FileSchema], required: true },
  photo: { type: String, required: false }, // ไม่บังคับ
  createdAt: { type: Date, default: Date.now },
});

export const GalleryModel: Model<IGallery> =
  mongoose.models.Gallery || mongoose.model<IGallery>('Gallery', GallerySchema);
