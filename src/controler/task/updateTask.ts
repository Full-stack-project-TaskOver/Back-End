import { join } from "path"
import { prisma } from "../../config/db"
import { Request, Response } from 'express'

 export const updateTask = async (req:Request, res:Response)=>{
    try{
        const task = await prisma.task.updateMany({
            where:{
              id: req.body.id,
              userId: res.locals.user.id
            },
            data:{
                title: req.body.title,
                description: req.body.description,
                status: req.body.status
            }
        })
        if(task.count == 0){
            res.json({
                message: 'the task not updated'
            })
        }
        res.status(200).json({
            message: 'task updated'
        })
    }catch(error){
        console.log(error)
    }
 }