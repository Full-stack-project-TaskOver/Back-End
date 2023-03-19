import { prisma } from "../../config/db"
import { Request, Response } from 'express'


export const allTaskInSession = async (req:Request, res:Response)=>{
    try{
        const session = await prisma.session.findMany({
            where:{
                id:req.params.id
            },
            select:{
                task:{
                    select:{
                        id:true,
                        title:true,
                        status:true,
                        description:true,
                        createdDate: true,
                        assignToId:true,
                        user:{
                            select:{
                                id:true,
                                name:true
                            }
                        }
                    }
                }
            }
        })
        if (session.length === 0){
            res.json({
                message:'there is no tasks in session'
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