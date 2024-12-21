import { Comment } from "../models/commentModel.js";
import { User } from "../models/userMode.js";
export const addComment = async (req, res) => {
  try {
    const { content, postId, userId } = req.body;

    if (!content || !postId || !userId) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    const comment = new Comment({
      content,
      postId,
      user: userId,
    });

    await comment.save();
    res.status(201).json({ message: "Comment added successfully", comment });
  } catch (error) {
    res.status(500).json({ message: "Error adding comment", error: error.message });
  }
};
export const getCommentsByPost = async (req, res) => {
  try {
    const { postId } = req.params;

    if (!postId) {
      return res.status(400).json({ message: "Post ID is required." });
    }

    const comments = await Comment.find({ postId }).populate("user", "name email");
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ message: "Error fetching comments", error: error.message });
  }
};
