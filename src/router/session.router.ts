import Router from 'express';
import auth from '../middleware/auth';
import { addSession } from '../controller/session/addSession';
import { allSessionOfUser } from '../controller/session/allSessionOfUser';
import { deleteSession } from '../controller/session/deleteSession';
import { updateSession } from '../controller/session/updateSession';
import {
  addSessionValidate,
  deleteSessionValidate,
  updateSessionValidate,
} from '../zodSchema/zod.session';
import validate from '../middleware/validate';

const router = Router();

router.post('/', auth, validate(addSessionValidate), addSession);
router.get('/', auth, allSessionOfUser);
router.delete('/', auth, validate(deleteSessionValidate), deleteSession);
router.put('/', auth, validate(updateSessionValidate), updateSession);

export default router;
