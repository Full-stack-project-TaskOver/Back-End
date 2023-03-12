import { prisma } from "../../config/db"
import { Request, Response } from 'express'
import * as argon2 from 'argon2'

export const SignUp = async (req:Request, res:Response)=>{
    const hash = await argon2.hash(req.body.password)
    try{
      const user = await prisma.user.create({
        data:{
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            password: hash,
            profile:{
              create:{
              }
            }
        }
      })
      if(user) {
        res.json({
          message: `user ${user.name} created!`
      })
      } else {
        res.status(500).json({
          message: 'Could not create user , please try again'
        })
      }
    }catch(error){
        console.log(error)
    }
}