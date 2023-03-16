import {addUsersToSession} from '../controller/userAndSession/addUsersToSession'
import { allUsersInSession } from '../controller/userAndSession/allUsersInSession';
import { deleteUserInSession } from '../controller/userAndSession/deleteUserInSession';
import { allUsersPointsInSession } from '../controller/userAndSession/allUsersPointsInSession';

import { addUsersToSessionValidate , deleteUserInSessionValidate } from '../zodSchema/zod.userAndSession';
import validate from '../middleware/validate';

import auth from '../middleware/auth';
import Router from 'express'
import { addPointToUser } from '../controller/userAndSession/addPointToUser';

const router = Router();

router.post('/',auth , validate(addUsersToSessionValidate), addUsersToSession)
// router.get('/', allUsersInSessions)
router.get('/:id', allUsersInSession)
router.delete('/',auth,validate(deleteUserInSessionValidate), deleteUserInSession)
router.put('/', addPointToUser)
router.get('/points/:id', allUsersPointsInSession)



export default router