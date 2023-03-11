import { prisma } from '../config/db';

export const checkAdmin = async (creatorId:string , sessionId:string)=>{
    // هذي ميدل وير فنكشن بسيطة تتاكد اذا اليوزر الي مسوي لوق ان ادمن ولا لا
    try {
        const user = await prisma.session.findFirst({
            where:{
                creatorId:creatorId,
                id:sessionId
            }
        })
        if(user){
            return true
        } else {
            return false
        }
    } catch (error) {
        console.log(error);
    }
}