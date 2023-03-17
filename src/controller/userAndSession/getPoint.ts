import { prisma } from '../../config/db';
import { Request, Response } from 'express';

//getPoint


export const getPoint = async (req: Request, res: Response) => {

    try {
      const session = await prisma.userAndSession.findMany({
        where:{
         userId: res.locals.user.id,
         sessionId:req.params.id
        },
        select:{
          point:true,

        }
      });
      if (session.length == 0) {
        res.json({
          message: 'There is no point for user',
        });
      } else {
        res.json({
          message:session,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  