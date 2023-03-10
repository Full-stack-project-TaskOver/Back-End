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
                task:{
                    select:{
                        title:true,
                        description: true,
                    }
                }
            }
        })
        res.json({
            task
        })
    }catch(error){
        console.log(error)
    }
}