import { prisma } from "../../config/db"
import { Request, Response } from 'express'
import * as argon2 from 'argon2'
import nodemailer from 'nodemailer'

export const ForgotPass = async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body as {
        email: string;
        password: string;
      };
      
      const user = await prisma.user.findUnique({ where: { email } });
      if (!user) {
        return res.status(404).json({
          message: "User not found",
        });
      }
      const hashedPassword = await argon2.hash(password);
      // Update user's password
      await prisma.user.update({
        where: { id: user.id },
        data: { password: hashedPassword },
      });
  
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "test.506112@gmail.com",
          pass: "szvcbsdjtiqwedwq",
        },
      });
  
      const mailOptions = {
        from: "test.506112@gmail.com",
        to: user.email,
        subject: "Password Reset",
        text: `تمت إعادة ضبط كلمة المرور الخاصة بك بنجاح. كلمة السر الجديدة الخاصة بك   ${password}. يرجى تسجيل الدخول إلى حسابك باستخدام كلمة المرور هذه وتغييرها على الفور.`,
      };
  
      await transporter.sendMail(mailOptions);
  
      return res.status(200).json({
        message: "Password reset successful. Check your email for new password",
      });
    } catch (error) {
      return res.status(500).json({
        message: "Server error",
      });
    }
  };