import { ForgotPass } from "../controler/user/ForgotPass";
import { SignUp } from "../controler/user/Sign-up";
import { SignIn } from "../controler/user/sign-in";
import Router from 'express'

const router = Router();

router.post('/sign-up', SignUp)
router.post('/sign-in', SignIn)
router.post('/forgotPass', ForgotPass)

export default router