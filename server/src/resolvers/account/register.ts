import { User } from "../user";
import * as bcrypt from "bcryptjs";

export const register = async (_: any, { email, password }: any) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({
    email,
    password: hashedPassword
  }).save();
  console.log("user registered", { user });
  return true;
};
