import Router from 'express'
import auth from '../middleware/auth';
import { addSession } from '../controller/session/addSession';
import { allSessionOfUser } from '../controller/session/allSessionOfUser';
import { deleteSession } from '../controller/session/deleteSession';
import { updateSession } from '../controller/session/updateSession';



const router = Router();

router.post('/',auth, addSession)
router.get('/',auth, allSessionOfUser)
router.delete('/',auth, deleteSession)
router.put('/',auth, updateSession)




export default router