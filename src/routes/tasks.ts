import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.send('tasks!');
});

export default router;