import express from 'express'
import * as dotenv from 'dotenv'
import {connectDB} from './config/db'
import userRoute from './router/user.router'
dotenv.config()

const app = express()
const PORT = process.env.PORT
app.use(express.json())

app.use('/us', userRoute)

app.listen(PORT, ()=> console.log(`server is runing on port ${PORT}`))
connectDB()