import { prisma } from '../../config/db';
import { Request, Response } from 'express';

export const leaveSession = async (req:Request, res:Response)=>{
    try{
        const user = await prisma.userAndSession.deleteMany({
            where:{
                userId: res.locals.user.id,
                sessionId: req.params.id
            }
        })
        if(user.count == 0){
            res.json({
                message: "no user"
            })  
        } else {
            res.json({
                message: "User deleted"
            })
        }
    }catch(error){
        console.log(error);
    }
}