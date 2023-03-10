import express from 'express'
import * as dotenv from 'dotenv'
import {connectDB} from './config/db'
import userRoute from './router/user.router'
import taskRoute from './router/task.router'
import sessionRouter from './router/session.router'
dotenv.config()

const app = express()
const PORT = process.env.PORT
app.use(express.json())

app.use('/us', userRoute)
app.use('/task', taskRoute)
app.use('/session', sessionRouter)

app.listen(PORT, ()=> console.log(`server is runing on port ${PORT}`))
connectDB()