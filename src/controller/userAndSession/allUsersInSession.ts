import { prisma } from '../../config/db';
import { Request, Response } from 'express';

export const allUsersInSessions = async (req: Request, res: Response) => {
  // هذي بس تستعرض السشنز و اليوزرز الي بداخلهم
  try {
    const session = await prisma.userAndSession.findMany({
      select:{
        session:true,
        user:true
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
