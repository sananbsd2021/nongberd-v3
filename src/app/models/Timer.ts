import mongoose from 'mongoose';

const TimerSchema = new mongoose.Schema({
  startTime: { type: Date, required: true },
  endTime: { type: Date, required: true },
  status: { type: String, enum: ['running', 'completed'], default: 'running' },
});

export const Timer = mongoose.models.Timer || mongoose.model('Timer', TimerSchema);
