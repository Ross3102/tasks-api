import { Ref, prop } from "@typegoose/typegoose";
import Task from "./Task";
import User from "./User";

class Category {
  @prop({ ref: () => User, required: true })
  public owner!: Ref<User>;

  @prop({ required: true })
  public title!: string;

  @prop({ ref: () => Task, required: true, default: [] })
  public tasks!: Ref<Task>[];
}

export default Category;