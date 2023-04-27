import { Router } from "express";
import { CategoryModel, TaskModel, UserModel } from "../models/models";
import Category from "../models/Category";
import { currentUser } from "../util/auth";

const router = Router();

router.get('/', async (req, res) => {
  const user = await UserModel.findById(currentUser()).populate('categories');
  if (!user) {
    return res.sendStatus(404);
  }
  const categories = user.categories;
  return res.send(categories);
});

router.get('/:category_id', async (req, res) => {
  const category = await CategoryModel.findById(req.params.category_id);
  if (!category) {
    return res.sendStatus(404);
  }
  return res.send(category);
});

router.post('/', (req, res) => {
  CategoryModel.create({
    ...req.body,
    owner: currentUser()
  })
    .then(async (category) => {
      const user = await UserModel.findById(currentUser());
      user?.categories.push(category);
      res.status(201).send(category)
    })
    .catch((err) => res.sendStatus(400));
});

router.post('/:category_id/tasks', async (req, res) => {
  const category = await CategoryModel.findById(req.params.category_id);
  if (!category) {
    return res.status(404).send("Category does not exist");
  }
  try {
    const task = new TaskModel(req.body);
    category.tasks.push(task);
    task.category = category;
    task.save();
    category.save();
    res.status(201).send(task);
  } catch (e) {
    return res.sendStatus(400);
  }
});

export default router;