import { prisma } from '../../config/db';
import { Request, Response } from 'express';

export const updateTaskStatus = async (req: Request, res: Response) => {
    
  try {
   
    const task = await prisma.task.update({
      where: {
        id: req.body.id,
      },
      data: {
        status: req.body.status,
      },
    });
    if (task) {
      res.json({
        message: 'task updated',
      });
    } else {
        res.json({
          message: 'task not updated',
        });
    }
  } catch (error) {
    console.log(error);
  }
};
