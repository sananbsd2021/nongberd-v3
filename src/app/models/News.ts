// import mongoose, { Schema, Document, Model } from 'mongoose';

// // Interface สำหรับ TypeScript
// export interface IFile {
//   name: string;
//   link: string;
// }

// export interface INews extends Document {
//   title: string;
//   description: string;
//   files: IFile[];
//   createdAt: Date;
// }

// // Schema ของไฟล์แนบ
// const FileSchema = new Schema<IFile>({
//   name: { type: String, required: true },
//   link: { type: String, required: true },
// });

// // Schema ของข่าวประชาสัมพันธ์
// const NewsSchema = new Schema<INews>({
//   title: { type: String, required: true },
//   description: { type: String, required: true },
//   files: { type: [FileSchema], required: true },
//   createdAt: { type: Date, default: Date.now },
// });

// export const NewsModel: Model<INews> =
//   mongoose.models.News || mongoose.model<INews>('News', NewsSchema);

import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IFile {
  name: string;
  link: string;
}

export interface INews extends Document {
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

const NewsSchema = new Schema<INews>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  files: { type: [FileSchema], required: true },
  photo: { type: String, required: false }, // ไม่บังคับ
  createdAt: { type: Date, default: Date.now },
});

export const NewsModel: Model<INews> =
  mongoose.models.News || mongoose.model<INews>('News', NewsSchema);
