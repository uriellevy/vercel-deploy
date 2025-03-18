import mongoose, { Schema, Document } from "mongoose";

interface IPost extends Document {
  title: string;
  content: string;
}

const PostSchema = new Schema<IPost>(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
  },
  { timestamps: true }
);

const Post = mongoose.model<IPost>("Post", PostSchema);
export default Post;