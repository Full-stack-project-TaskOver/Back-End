import { prisma } from '../../config/db';
import { Request, Response } from 'express';

export const addUsersToSession = async (req: Request, res: Response) => {
  try {
    // نشيك اذا اليوزر الي جايني من البدي موجود بالتيبل حقه ولا لا
    const checkUser = await prisma.user.findFirst({
        where:{
            id:req.body.userId
        }
    })

    // نشيك اذا السشن الي جايني من البدي موجود بالتيبل حقه ولا لا
    const checkSession = await prisma.session.findFirst({
        where:{
            id:req.body.sessionId
        }
    })
    

    if (!checkUser || !checkSession) {
        return res.status(400).json({
            message:'Session or user dose not exists'
        })
    } else {
      const checkIfUserInSession = await prisma.userAndSession.findFirst({
        where:{
          userId:req.body.userId,
        sessionId:req.body.sessionId
        }
      })
      if (checkIfUserInSession) {
        return res.status(400).json({
          message: 'User already in this session !',
        });
      }
    }

    if(req.body.userId === res.locals.user.id) {
      return res.status(400).json({
        message:'You are the admin in this session'
    })
    }
    
    // بعدين نضيف اليوزر داخل السشن
    const session = await prisma.userAndSession.createMany({
      data: {
        userId:req.body.userId,
        sessionId:req.body.sessionId
      },
    });
    if (session) {
      res.json({
        message: 'User added to Session !',
      });
    } else {
      res.status(500).json({
        message: 'Could not add User to Session , please try again',
      });
    }
  } catch (error) {
    console.log(error);
  }
};
