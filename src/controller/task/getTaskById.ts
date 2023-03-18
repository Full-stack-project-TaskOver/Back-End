import { prisma } from "../../config/db"
import { Request, Response } from 'express'



export const getTaskById = async (req:Request, res:Response)=>{
    try{
        const task = await prisma.task.findMany({
            where:{
                assignToId:res.locals.user.id,
                id: req.body.id
            }
        })
        if (task.length === 0){
            res.json({
                message:'you dont have any task'
            })
        } else {
            res.json({
                task
            })
        }
    }catch(error){
        console.log(error)
    }
}
