import { prisma } from '../../config/db';
import { Request, Response } from 'express';

export const allUsersInSession = async (req: Request, res: Response) => {
  // هذي بس تستعرض السشنز و اليوزرز الي بداخلهم
  try {
    const session = await prisma.userAndSession.findMany({
    //   where:{
    //      sessionId: req.body.sessionId
    //   },
      select:{
        user:{
          select:{
            id:true,
            name:true,
            email:true,
            phone:true
          }
        }
      }
    });
    if (session.length == 0) {
      res.json({
        message: 'There is no Users in Sessions',
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
