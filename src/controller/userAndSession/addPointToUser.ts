import { prisma } from '../../config/db';
import { Request, Response } from 'express';

interface User {
    id:string,
    point:number
}

export const addPointToUser = async (req: Request, res: Response) => {
    try{
        let userPoints:User = {
            id:'',
            point:0
        }
        const getUserPoint = await prisma.userAndSession.findFirst({
            where:{
                sessionId: req.params.id,
                userId: req.body.id
            },
            select:{
                id:true,
                point:true,
            }
        }) 
        if(getUserPoint){
            userPoints= getUserPoint
        } else {
            res.json({
                message:'Error'
            })
        }
        const point = await prisma.userAndSession.updateMany({
            where:{
                sessionId: req.params.id,
                userId: req.body.assignToId
            },
            data:{
                point: userPoints.point + 100 
            }
        })
        
        if(!point){
            res.json('we cant add point')
        }else{
            res.json({point})
        }
    }catch(error){
        console.log(error)
    }
}