import { prisma } from "../../config/db"
import { Request, Response } from 'express'
import * as argon2 from 'argon2'
import * as jwt from 'jsonwebtoken'
import * as dotenv from 'dotenv'

const Seccret = process.env.mySeccret


export const SignIn = async (req:Request, res:Response)=>{
    try{
     const user = await prisma.user.findUnique({
        where:{
            email: req.body.email
        }
     })
     if(!user){
        return res.status(400).json({message:'Wrong email adress'})
     }else if(!await argon2.verify(user.password, req.body.password)){
        return res.status(400).json({message:'Wrong password'})
     }
     const token = jwt.sign({
        id: user.id
     }, Seccret as string, {expiresIn:'3h'})
     return res.status(200).json({
        token: token
     })
    }catch(error){
        console.log(error)
    }
}