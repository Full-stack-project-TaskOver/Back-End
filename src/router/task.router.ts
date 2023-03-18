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
import { updateTaskStatus } from '../controller/task/updateTaskStatus';
import { getTaskById } from '../controller/task/getTaskById';
const router = Router();

router.post('/',validate(addTaskValidate), auth , addTask);
router.get('/:id', auth, allTaskOfUser);
router.get('/all-task/:id', auth, allTaskInSession);
router.post('/details', auth, getTaskById);

router.delete('/', auth,validate(deleteTaskValidate), deleteTask);
router.put('/', auth,validate(updateTaskValidate), updateTask);
router.put('/updateStatus', updateTaskStatus);

export default router;
