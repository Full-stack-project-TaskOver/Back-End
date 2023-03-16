import Router from 'express';
import { addTask } from '../controller/task/addTask';
import { deleteTask } from '../controller/task/deleteTask';
import auth from '../middleware/auth';
import { updateTask } from '../controller/task/updateTask';
import { allTaskOfUser } from '../controller/task/allTaskOfUser';
import validate from '../middleware/validate';
import {
  addTaskValidate,
  deleteTaskValidate,
  updateTaskValidate,
} from '../zodSchema/zod.task';
import { allTaskInSession } from '../controller/task/allTasksInSession';
const router = Router();

router.post('/',validate(addTaskValidate), auth , addTask);
router.get('/:id', auth, allTaskOfUser);
router.get('/all-task/:id', auth, allTaskInSession);

router.delete('/', auth,validate(deleteTaskValidate), deleteTask);
router.put('/', auth, updateTask);
// validate(updateTaskValidate),
export default router;
