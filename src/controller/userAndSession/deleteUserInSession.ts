import { prisma } from '../../config/db';
import { Request, Response } from 'express';
import { checkAdmin } from '../../helpers/checkAdmin';


export const deleteUserInSession = async (req:Request, res:Response)=>{
    try{

        // const checkUser = await prisma.session.findMany({
        //     where:{
        //         creatorId: res.locals.user.id
        //     }
        // })
        // if(checkUser.length == 0){
        //     res.json({
        //         message: "You do not have the authority to delete"
        //     }) 
        // }
        if(!await checkAdmin(res.locals.user.id , req.body.sessionId)){
            res.json({
              message:'You are not an admin in this session'
            })
          }
        const user = await prisma.userAndSession.deleteMany({
            where:{
                userId: req.body.userId
            }
        })
        if(user.count == 0){
            res.json({
                message: "no user"
            })  
        }
        res.json({
            message: "User deleted"
        })
    }catch(error){
        console.log(error);
    }
}