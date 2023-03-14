import { prisma } from "../../config/db"
import { Request, Response } from 'express'

export const getSession = async (req:Request, res:Response)=>{
    try{
     const session = await prisma.session.findFirst({
        where:{
            id:req.params.id
        }
    })
    if(session){
        res.json({
            session
        })
    } else {
        res.status(404).json({
            message: "Session dose not exists"
        })
    }
    }catch(error){
        console.log(error)
    }
}

