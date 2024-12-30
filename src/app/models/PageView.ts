import mongoose, { Schema, Document, Model } from 'mongoose';

interface IPageView extends Document {
  page: string;
  views: number;
}

const PageViewSchema: Schema<IPageView> = new Schema(
  {
    page: { type: String, required: true, unique: true },
    views: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const PageView: Model<IPageView> = mongoose.models.PageView || mongoose.model<IPageView>('PageView', PageViewSchema);

export default PageView;
