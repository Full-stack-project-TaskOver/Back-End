import { prisma } from '../../config/db';
import { Request, Response } from 'express';
import { checkAdmin } from '../../helpers/checkAdmin';

export const deleteTask = async (req: Request, res: Response) => {
  try {
    // يشيك اذا اليوزر الي مسوي لوق ان ادمن بهذي السشن ولا لا
    if (!(await checkAdmin(res.locals.user.id, req.body.sessionId))) {
      res.json({
        message: 'You are not an admin in this session',
      });
    }
    const task = await prisma.task.deleteMany({
      where: {
        id: req.body.id,
        assignBy: res.locals.user.id,
      },
    });
    if (task.count == 0) {
      res.json({
        message: 'the task is not deleted',
      });
    }
    res.json({
      message: 'Task deleted',
    });
  } catch (error) {
    console.log(error);
  }
};
