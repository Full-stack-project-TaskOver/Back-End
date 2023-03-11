import { prisma } from "../../config/db"
import { Request, Response } from 'express'

export const addSession = async (req:Request, res:Response)=>{
    try{
      const creatorId = res.locals.user.id
     const session = await prisma.session.createMany({
        data:{
            name: req.body.name,
            creatorId: creatorId,
            type:req.body.type
        }
    })
    if(session){
        res.json({
            message: "Session created!"
        })
    } else {
        res.status(500).json({
            message: "Could not add Session , please try again"
        })
    }
    }catch(error){
        console.log(error)
    }
}

