import { Ref, prop } from "@typegoose/typegoose";
import Category from "./Category";

class User {
  @prop({ required: true })
  public name!: string;

  @prop({ ref: () => Category, required: true, default: [] })
  public categories!: Ref<Category>[];
}

export default User;