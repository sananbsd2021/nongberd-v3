import mongoose, { Schema, model, models } from 'mongoose';

const UserSchema = new Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  role: { type: String, required: true },
  grade: { type: String, required: true },
  age: { type: Number, required: true },
}, { timestamps: true });

const User = models.User || model('User', UserSchema);

export default User;
