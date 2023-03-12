import { prisma } from '../../config/db';
import { Request, Response } from 'express';
import { checkAdmin } from '../../helpers/checkAdmin';

export const updateSession = async (req: Request, res: Response) => {
  try {
    // يشيك اذا اليوزر الي مسوي لوق ان ادمن بهذي السشن ولا لا
    if (!(await checkAdmin(res.locals.user.id, req.body.sessionId))) {
      return res.json({
        message: 'You are not an admin in this session',
      });
    }
    const session = await prisma.session.updateMany({
      where: {
        id: req.body.id,
        creatorId: res.locals.user.id,
      },
      data: {
        name: req.body.name,
        description: req.body.description,
        type: req.body.type,
      },
    });
    if (session.count == 0) {
      res.json({
        message: 'session not updated',
      });
    }
    res.status(200).json({
      message: 'session updated',
    });
  } catch (error) {
    console.log(error);
  }
};
