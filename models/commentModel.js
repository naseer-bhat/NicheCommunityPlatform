import { model, Schema } from 'mongoose'
const commentSchema = new Schema({
  content: { type: String, required: true },
  postId: { type: String, required: true }, 
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  createdAt: { type: Date, default: Date.now },
});
export const Comment = model("Comment", commentSchema);