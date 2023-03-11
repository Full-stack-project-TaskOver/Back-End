import Router from 'express'
import { addTask } from '../controller/task/addTask';
import { deleteTask } from '../controller/task/deleteTask';
import auth from '../middleware/auth';
import { updateTask } from '../controller/task/updateTask';
import { allTaskOfUser } from '../controller/task/allTaskOfUser';
const router = Router();

router.post('/',auth, addTask)
router.get('/',auth, allTaskOfUser)
router.delete('/',auth, deleteTask)
router.put('/',auth, updateTask)

export default router