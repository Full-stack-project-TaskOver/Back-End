import { leaveSession } from './../controller/session/leaveSession';
import { getSession } from './../controller/session/getSession';
import { allSessionAsUser } from './../controller/session/allSessionAsUser';
import Router from 'express';
import auth from '../middleware/auth';
import { addSession } from '../controller/session/addSession';
import { allSessionAsAdmin } from '../controller/session/allSessionAsAdmin';
import { deleteSession } from '../controller/session/deleteSession';
import { updateSession } from '../controller/session/updateSession';
import {
  addSessionValidate,
  updateSessionValidate,
} from '../zodSchema/zod.session';
import validate from '../middleware/validate';

const router = Router();

router.post('/', auth, validate(addSessionValidate), addSession);
router.get('/AsAdmin', auth, allSessionAsAdmin);
router.get('/AsUser', auth, allSessionAsUser);
router.get('/:id', auth, getSession);
router.delete('/:id', auth, deleteSession);
router.delete('/leave/:id', auth, leaveSession);

router.put('/', auth, validate(updateSessionValidate), updateSession);

export default router;
