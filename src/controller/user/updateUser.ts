import { prisma } from "../../config/db"
import { Request, Response } from 'express'

export const updateUser = async (req:Request, res:Response)=>{
    try{
        const user = await prisma.user.updateMany({
            where:{
              id: res.locals.user.id,
            },
            data:{
                name:req.body.name,
                phone:req.body.phone,
            }
        })
        if(user.count == 0){
            res.json({
                message: 'user not updated'
            })
        }
        res.status(200).json({
            message: 'user updated'
        })
    }catch(error){
        console.log(error)
    }
 }