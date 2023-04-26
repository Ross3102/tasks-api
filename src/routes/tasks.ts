import { Router } from 'express';
import { TaskModel } from '../models/models';

const router = Router();

router.get('/', async (req, res) => {
  const tasks = await TaskModel.find();
  res.status(200).send(tasks);
});

export default router;