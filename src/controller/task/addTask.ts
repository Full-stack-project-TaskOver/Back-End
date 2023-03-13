import { checkAdmin } from './../../helpers/checkAdmin';
import { prisma } from '../../config/db';
import { Request, Response } from 'express';

export const addTask = async (req: Request, res: Response) => {
  // اليوزر الي مسوي لوق ان لازم يكون ادمن و يكون عنده سشن
  
  
  try {
  // يشيك اذا اليوزر الي مسوي لوق ان ادمن بهذي السشن ولا لا
  if(!await checkAdmin(res.locals.user.id , req.body.sessionId)){
    return res.json({
      message:'You are not an admin in this session'
    })
  }


  // نتاكد اذا اليوزر الي بنعطيه التاسك موجود بالسشن اصلا ولا لا
  const user = await prisma.userAndSession.findFirst({
    where:{
      sessionId:req.body.sessionId,
      userId:req.body.assignToId
    }
  });
  if(!user){
    res.json({
      message:'user is not in this session'
    })
  }


    const task = await prisma.task.create({
      data:{
            title: req.body.title,
            description: req.body.description,
            // status: req.body.status,
            user: {
              // هنا نربط التاسك هذي باليوزر الي بيشتغل عليها
              connect:{
                id:req.body.assignToId
              }
            },
            session:{
              connect:{
                // هنا نربط التاسك بالسيشن عشان ما يطلع بباقي السشنز
                id:req.body.sessionId
              }
            },
            assignById:res.locals.user.id
      }
    });
    if (task) {
      res.json({
        message: `Task ${task.title} created!`,
      });
    } else {
      res.status(500).json({
        message: 'Could not add Task , please try again',
      });
    }
  } catch (error) {
    console.log(error);
  }
};
