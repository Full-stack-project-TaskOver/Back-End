import { ForgotPass } from "../controller/user/ForgotPass";
import { SignUp } from "../controller/user/Sign-up";
import { SignIn } from "../controller/user/sign-in";
import validate from "../middleware/validate";
import { signUpValidate } from "../controller/zodSchema/zod";
import { signInValidate } from "../controller/zodSchema/zod";
import Router from 'express'

const router = Router();

router.post('/sign-up',validate(signUpValidate), SignUp)
router.post('/sign-in',validate(signInValidate), SignIn)
router.post('/forgotPass', ForgotPass)

export default router