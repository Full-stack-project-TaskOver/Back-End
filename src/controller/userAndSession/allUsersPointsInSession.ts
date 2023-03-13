import { prisma } from '../../config/db';
import { Request, Response } from 'express';

export const allUsersPointsInSession = async (req: Request, res: Response) => {

  try {
    const session = await prisma.userAndSession.findMany({
        where:{
            sessionId:req.body.sessionId
        },
        orderBy:{
          point:'desc'
        },
      select:{
        point:true,
        user:{
          select:{
            id:true,
            name:true,
          }
        }
      },
    });
    if (session.length == 0) {
      res.json({
        message: 'There is no Users in Sessions',
      });
    } else {
      res.json({
        session,
      });
    }
  } catch (error) {
    console.log(error);
  }
};
