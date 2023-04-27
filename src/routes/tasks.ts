import { Router } from "express";
import { CategoryModel, TaskModel, UserModel } from "../models/models";
import Category from "../models/Category";
import { currentUser } from "../util/auth";

const router = Router();

router.get('/upcoming', async (req, res) => {
  const user = await UserModel.findById(currentUser()).populate({
    path: 'categories',
    populate: {
      path: 'tasks',
    }
  });
  if (!user) {
    return res.sendStatus(404);
  }
  const tasks = user.categories.flatMap(c => (c as Category).tasks);
  // TODO sort by date
  return res.send(tasks);
});

export default router;