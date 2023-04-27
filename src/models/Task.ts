import { Ref, prop } from "@typegoose/typegoose";
import Category from "./Category";

class Task {
  @prop({ ref: () => Category, required: true })
  public category!: Ref<Category>;

  @prop({ required: true })
  public title!: string;
}

export default Task;