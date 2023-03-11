import { prisma } from "../../config/db"
import { Request, Response } from 'express'



export const allTaskOfUser = async (req:Request, res:Response)=>{
    try{
        const task = await prisma.user.findMany({
            where:{
                id: res.locals.user.id
            },
            select:{
                name:true,
                task:true,
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