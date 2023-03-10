import { prisma } from "../../config/db"
import { Request, Response } from 'express'

export const addTask = async (req:Request, res:Response)=>{
    try{

     const task = await prisma.task.create({
        data:{
            title: req.body.title,
            description: req.body.description,
            status: req.body.status,
            userId: res.locals.user.id
        }
    })
    res.json({
        message: "Taske created!"
    })
    }catch(error){
        console.log(error)
    }
}