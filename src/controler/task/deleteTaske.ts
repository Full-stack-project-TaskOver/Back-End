import { prisma } from "../../config/db"
import { Request, Response } from 'express'

 export const deleteTask = async (req:Request, res:Response)=>{
    try{
    const task = await prisma.task.deleteMany({
        where:{
            id: req.body.id,
            userId: res.locals.user.id
        }
    })
    if(task.count == 0){
        res.json({
            message: 'the task not deleted'
        })
    }
    res.json({
        message: 'Task deleted'
    })
    }catch(error){
        console.log(error)
    }
}