import mongoose, { Schema, model, models } from 'mongoose';

const NewslistSchema = new Schema({
  title: {
    type: String,
    required: [false, 'Title is required'], // ชื่อเป็นข้อมูลที่จำเป็น
  },
  description: {
    type: String,
    required: [false, 'Description is required'], // ตำแหน่งเป็นข้อมูลที่จำเป็น
  },
  role: {
    type: String,
    enum: ['news', 'newssell'], // จำกัดค่า role
    required: [false, 'Role is required'], // role เป็นข้อมูลที่จำเป็น
  },
  photo: {
    type: String,
    required: [false, 'Photo URL is required'], // รูปภาพเป็นข้อมูลที่จำเป็น
  },
}, { timestamps: true });

const Newslist = models.Newslist || model('Newslist', NewslistSchema);
export default Newslist;
