import express from 'express'
import dotenv from 'dotenv'
import { connect } from "mongoose";
import userRouter from './routes/userRoute.js';
const app = express()
dotenv.config()
const database_url = process.env.db_url
const PORT= process.env.PORT
connect(database_url).then(() => console.log(`db connected`))
app.use(express.json())

app.use('/user',userRouter)
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})