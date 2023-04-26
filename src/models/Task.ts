import { prop } from "@typegoose/typegoose";

class Task {
  @prop({ required: true })
  public title!: string;
}

export default Task;