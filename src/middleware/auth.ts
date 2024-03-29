import { NextFunction, Request, Response } from "express"
import * as jwt from 'jsonwebtoken'
import * as dotenv from 'dotenv'

dotenv.config()

const Seccret = process.env.mySeccret

interface User{
    id: string
    role: string
}
const auth = (req:Request, res:Response, next:NextFunction)=>{
    try{

        const header = req.headers.authorization
        const token = header?.split(' ')[1]
        // const token = req.headers.authorization
        if(!token){
            return res.status(403).json({
                "message":"you are not authorized"
            })  
        }
        const user = jwt.verify(token, Seccret as string) as User
        res.locals.user = user
        next()

    }catch(error){
        console.log(error)
    }
}
// const auth = (req:Request, res:Response, next:NextFunction)=>{
//     try{
//         const header = req.headers.authorization
//         const token = header?.split(' ')[1]
//         if(!token){
//             return res.status(403).json({
//                 "message":"you are not authorized"
//             })
//         }
//         const user = jwt.verify(token, Seccret as string) as User
//         res.locals.user = user
//         next()

//     }catch(error){
//         console.log(error)
//     }
// }

export default auth