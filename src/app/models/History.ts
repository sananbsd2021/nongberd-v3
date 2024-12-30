import mongoose, { Schema, model, models } from 'mongoose';

const HistorySchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
}, { timestamps: true });

const History = models.History || model('History', HistorySchema);

export default History;
