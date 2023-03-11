import { ForgotPass } from "../controller/user/ForgotPass";
import { SignUp } from "../controller/user/Sign-up";
import { SignIn } from "../controller/user/sign-in";
import Router from 'express'

const router = Router();

router.post('/sign-up', SignUp)
router.post('/sign-in', SignIn)
router.post('/forgotPass', ForgotPass)

export default router