import { Router } from "express";
import { userLogin } from "../controllers/loginController.js";
import { signUp} from '../controllers/signupController.js'
import {addUser, getUserById} from '../controllers/userController.js'
const userRouter = Router()
userRouter.get('/getuser:id', getUserById)
userRouter.post('/addUser',addUser)
userRouter.post('/signup', signUp)
userRouter.post('/login',userLogin)
export default userRouter