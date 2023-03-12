import { prisma } from '../../config/db';
import { Request, Response } from 'express';


export const addPointToUser = async (req: Request, res: Response) => {
    try{
        const user = await prisma.userAndSession.findFirst({
            where:{
                id: req.body.id
            }
        })
        if(!user){
            res.json('user is not is the session')
        }
        const poit = await prisma.userAndSession.update({
            where:{
                id: req.body.id
            },
            data:{
                point: req.body.point
            }
        })
        
        if(!poit){
            res.json('we cant add point')
        }else{
            res.json(poit)
        }
    }catch(error){
        console.log(error)
    }
}