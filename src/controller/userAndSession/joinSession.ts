import { prisma } from '../../config/db';
import { Request, Response } from 'express';
import { checkAdmin } from '../../helpers/checkAdmin';

export const joinSession = async (req: Request, res: Response) => {
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

    if(!checkUser) {
      return res.status(400).json({
        message:'User dose not exists'
    })
    }
    
    if(await checkAdmin(res.locals.user.id , req.body.sessionId)){
      return res.status(400).json({
        message:'You are the admin in this session'
      })
    }

    if (!checkSession) {
        return res.status(400).json({
            message:'Session dose not exists'
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
