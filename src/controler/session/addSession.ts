import { prisma } from "../../config/db"
import { Request, Response } from 'express'

export const addSession = async (req:Request, res:Response)=>{
    try{
      const creatorId = res.locals.user.id
     const session = await prisma.session.createMany({
        data:{
            name: req.body.name,
            creatorId: creatorId
        }
    })
    res.json({
        message: "Session created!"
    })
    }catch(error){
        console.log(error)
    }
}