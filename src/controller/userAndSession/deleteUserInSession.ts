import { prisma } from '../../config/db';
import { Request, Response } from 'express';
import { checkAdmin } from '../../helpers/checkAdmin';

export const deleteUserInSession = async (req:Request, res:Response)=>{
    try{
        if(!await checkAdmin(res.locals.user.id , req.body.sessionId)){
            return res.json({
              message:'You are not an admin in this session'
            })
          }
        const user = await prisma.userAndSession.deleteMany({
            where:{
                userId: req.params.userId ,
                sessionId: req.params.sessionId
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