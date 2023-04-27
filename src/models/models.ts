import { getModelForClass } from '@typegoose/typegoose';
import Category from './Category';
import Task from './Task';
import User from './User';

export const UserModel = getModelForClass(User);
export const CategoryModel = getModelForClass(Category);
export const TaskModel = getModelForClass(Task);