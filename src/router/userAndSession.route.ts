import {addUsersToSession} from '../controller/userAndSession/addUsersToSession'
import {allUsersInSessions} from '../controller/userAndSession/allUsersInSession'
import { deleteUserInSession } from '../controller/userAndSession/deleteUserInSession';
import { addUsersToSessionValidate , deleteUserInSessionValidate } from '../zodSchema/zod.userAndSession';
import validate from '../middleware/validate';

import auth from '../middleware/auth';
import Router from 'express'

const router = Router();

router.post('/',validate(addUsersToSessionValidate), addUsersToSession)
router.get('/', allUsersInSessions)
router.delete('/',auth,validate(deleteUserInSessionValidate), deleteUserInSession)



export default router