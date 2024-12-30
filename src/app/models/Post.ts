import mongoose, { Schema, model, models, Document } from 'mongoose';

interface IPost extends Document {
  title: string;
  content: string;
  createdAt: Date;
}

const PostSchema = new Schema<IPost>({
  title: { type: String, required: true },
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Post = models.Post || model<IPost>('Post', PostSchema);

export default Post;
