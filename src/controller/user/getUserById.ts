import { prisma } from "../../config/db"
import { Request, Response } from 'express'

export const getUserById = async (req:Request, res:Response)=>{
    try{
        const user = await prisma.user.findFirst({
            where:{
              id: res.locals.user.id,
            },
            select:{
                id:true,
                email:true,
                name:true,
                phone:true,
            }
        })
        if(!user){
            res.json({
                message: 'user not found'
            })
        }
        res.status(200).json({ user,
            message: 'user is found'
        })
    }catch(error){
        console.log(error)
    }
 }