import express from "express";
import { addComment, getCommentsByPost } from "../controllers/commentController.js";
import { userLogin } from "../controllers/loginController.js";

const router = express.Router();
router.post("/add",userLogin, addComment);
router.get("/:postId",userLogin,getCommentsByPost);
export default router;
