import { prisma } from "../../config/db"
import { Request, Response } from 'express'



export const allTaskOfUser = async (req:Request, res:Response)=>{
    try{
        const task = await prisma.task.findMany({
            where:{
                assignToId:res.locals.user.id,
                sessionId:req.params.sessionId
            },
        })
        if (task.length === 0){
            res.json({
                message:'you dont have any task'
            })
        } else {
            res.json({
                task
            })
        }
    }catch(error){
        console.log(error)
    }
}

// export const allTaskInSession = async (req:Request, res:Response)=>{
//     try{
//         const session = await prisma.session.findMany({
//             where:{
//                 id:req.body.sessionId
//             },
//             select:{
//                 task:true
//             }
//         })
//         if (session.length === 0){
//             res.json({
//                 message:'you dont have any task'
//             })
//         } else {
//             res.json({
//                 session
//             })
//         }
//     }catch(error){
//         console.log(error)
//     }
// }