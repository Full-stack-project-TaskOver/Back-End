import { updateUser } from './../controller/user/updateUser';
import { ForgotPass } from '../controller/user/ForgotPass';
import { SignUp } from '../controller/user/Sign-up';
import { SignIn } from '../controller/user/sign-in';
import validate from '../middleware/validate';
import { signInValidate ,signUpValidate , updateUserValidate,forgotPassValidate } from '../zodSchema/zod.user';
import Router from 'express';
import auth from '../middleware/auth';

const router = Router();

router.post('/sign-up', validate(signUpValidate), SignUp);
router.post('/sign-in', validate(signInValidate), SignIn);
router.post('/forgotPass', validate(forgotPassValidate),ForgotPass);
router.put('/', validate(updateUserValidate), updateUser);


export default router;
