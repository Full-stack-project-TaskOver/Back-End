import {addUsersToSession} from '../controller/userAndSession/addUsersToSession'
import {allUsersInSessions} from '../controller/userAndSession/allUsersInSession'
import { deleteUserInSession } from '../controller/userAndSession/deleteUserInSession';
import auth from '../middleware/auth';
import Router from 'express'

const router = Router();

router.post('/', addUsersToSession)
router.get('/', allUsersInSessions)
router.delete('/',auth, deleteUserInSession)



export default router