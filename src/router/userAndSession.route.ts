import {addUsersToSession} from '../controller/userAndSession/addUsersToSession'
import {allUsersInSessions} from '../controller/userAndSession/allUsersInSession'
import Router from 'express'

const router = Router();

router.post('/', addUsersToSession)
router.get('/', allUsersInSessions)



export default router