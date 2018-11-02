import { User } from "../user";
import * as bcrypt from "bcryptjs";

const hashPassword = async (password: string): Promise<string> =>
  await bcrypt.hash(password, 10);

const createUser = async ({ email, password }) =>
  await User.create({
    email,
    password
  }).save();

export const register = async (
  _: any,
  { email, password }: any
): Promise<boolean> => {
  const hashedPassword = await hashPassword(password);
  const user = await createUser({
    email,
    password: hashedPassword
  });
  console.log("user registered", { user });
  return true;
};
