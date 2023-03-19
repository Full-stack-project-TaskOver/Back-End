import {addUsersToSession} from '../controller/userAndSession/addUsersToSession'
import { allUsersInSession } from '../controller/userAndSession/allUsersInSession';
import { deleteUserInSession } from '../controller/userAndSession/deleteUserInSession';
import { allUsersPointsInSession } from '../controller/userAndSession/allUsersPointsInSession';
import { joinSession } from '../controller/userAndSession/joinSession';


import { addUsersToSessionValidate , deleteUserInSessionValidate } from '../zodSchema/zod.userAndSession';
import validate from '../middleware/validate';

import auth from '../middleware/auth';
import Router from 'express'
import { addPointToUser } from '../controller/userAndSession/addPointToUser';
import { getPoint } from '../controller/userAndSession/getPoint';

const router = Router();

router.post('/',auth , validate(addUsersToSessionValidate), addUsersToSession)
router.post('/join-session',auth , validate(addUsersToSessionValidate), joinSession)

router.get('/:id',auth , allUsersInSession)
router.delete('/:id/:userId',auth, deleteUserInSession)
router.put('/:id', addPointToUser)
router.get('/points/:id', allUsersPointsInSession)



export default router