import mongoose, { Schema, model, models } from 'mongoose';

const EmployeeSchema = new Schema({
  name: {
    type: String,
    required: [false, 'Name is required'], // ชื่อเป็นข้อมูลที่จำเป็น
  },
  position: {
    type: String,
    required: [false, 'Position is required'], // ตำแหน่งเป็นข้อมูลที่จำเป็น
  },
  role: {
    type: String,
    enum: ['director', 'teacher', 'staff'], // จำกัดค่า role เฉพาะ 3 ค่า
    required: [false, 'Role is required'], // role เป็นข้อมูลที่จำเป็น
  },
  photo: {
    type: String,
    required: [false, 'Photo URL is required'], // รูปภาพเป็นข้อมูลที่จำเป็น
  },
}, { timestamps: true });

const Employee = models.Employee || model('Employee', EmployeeSchema);
export default Employee;
