import { Router } from "express";
import { signUp } from "../controllers/signupController.js";
import { userLogin } from "../controllers/loginController.js";
const userRouter= Router()
userRouter.post('/signup', signUp)
userRouter.post('/login',userLogin)
export default userRouter