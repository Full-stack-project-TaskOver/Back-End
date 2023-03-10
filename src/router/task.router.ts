import Router from 'express'
import { addTask } from '../controler/task/addTask';
import { deleteTask } from '../controler/task/deleteTaske';
import auth from '../middileware/auth';
import { updateTask } from '../controler/task/updateTask';
import { allTaskOfUser } from '../controler/task/allTaskOfUser';
const router = Router();

router.post('/new',auth, addTask)
router.post('/',auth, allTaskOfUser)
router.delete('/',auth, deleteTask)
router.put('/',auth, updateTask)

export default router