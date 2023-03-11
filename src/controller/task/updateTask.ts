import { prisma } from '../../config/db';
import { Request, Response } from 'express';
import { checkAdmin } from '../../helpers/checkAdmin';

export const updateTask = async (req: Request, res: Response) => {
  try {
    // يشيك اذا اليوزر الي مسوي لوق ان ادمن بهذي السشن ولا لا
    if (!(await checkAdmin(res.locals.user.id, req.body.sessionId))) {
      res.json({
        message: 'You are not an admin in this session',
      });
    }
    const task = await prisma.task.updateMany({
      where: {
        id: req.body.id,
        userId: res.locals.user.id,
      },
      data: {
        title: req.body.title,
        description: req.body.description,
        status: req.body.status,
      },
    });
    if (task.count == 0) {
      res.json({
        message: 'task not updated',
      });
    }
    res.status(200).json({
      message: 'task updated',
    });
  } catch (error) {
    console.log(error);
  }
};
