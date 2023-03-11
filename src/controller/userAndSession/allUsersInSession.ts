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
    if (session) {
      res.json({
        message: res.json(session),
      });
    } else {
      res.status(500).json({
        message: 'There is no Users in Sessions',
      });
    }
  } catch (error) {
    console.log(error);
  }
};
