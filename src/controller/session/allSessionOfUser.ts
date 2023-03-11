import { prisma } from "../../config/db"
import { Request, Response } from 'express'



export const allSessionOfUser = async (req:Request, res:Response)=>{
    try{
        const session = await prisma.session.findMany({
            where:{
                creatorId: res.locals.user.id
            },
            include:{
                task:true,
            }
        })
        if (session.length === 0){
            res.json({
                message:'you dont have any sessions'
            })
        } else {
            res.json({
                session
            })
        }
    }catch(error){
        console.log(error)
    }
}