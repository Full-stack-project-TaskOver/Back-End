import { prisma } from "../../config/db"
import { Request, Response } from 'express'

export const addSession = async (req:Request, res:Response)=>{
    try{
      const creatorId = res.locals.user.id
     const session = await prisma.session.createMany({
        data:{
            title:req.body.title,
            creatorId: creatorId,
            description: req.body.description,
            type:req.body.type
        }
    })
    if(session){
        res.json({session,
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

