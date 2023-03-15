import { prisma } from '../../config/db';
import { Request, Response } from 'express';
import { checkAdmin } from '../../helpers/checkAdmin';

export const deleteSession = async (req: Request, res: Response) => {
  try {
    // يشيك اذا اليوزر الي مسوي لوق ان ادمن بهذي السشن ولا لا
    if (!(await checkAdmin(res.locals.user.id, req.body.sessionId))) {
      return res.json({
        message: 'You are not an admin in this session',
      });
    }
    const deleteUsers = await prisma.userAndSession.deleteMany({
      where:{
        sessionId:req.params.id,
      }
    })
    const deleteTask = await prisma.task.deleteMany({
      where:{
        sessionId:req.params.id,
      }
    })

    const session = await prisma.session.deleteMany({
      where: {
        id: req.params.id,
        creatorId: res.locals.user.id,
      },
    });
    if (session.count == 0) {
      res.json({
        message: 'the session is not deleted',
      });
    }
    res.json({
      message: 'Session deleted',
      session,
      deleteUsers,
      deleteTask
    });
  } catch (error) {
    console.log(error);
  }
};
