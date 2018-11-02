import { findUserByEmail } from "../user";
import * as bcrypt from "bcryptjs";

const setUserOnSession = (req, user) => (req.session.userId = user.id);

export const validatePassword = async (entered, stored) =>
  await bcrypt.compare(entered, stored);

export const login = async (
  _: any,
  { email, password }: any,
  { req }: any
): Promise<any> => {
  const user = await findUserByEmail(email);
  if (!user) {
    return null;
  }

  const valid = await validatePassword(password, user.password);
  if (!valid) {
    return null;
  }

  setUserOnSession(req, user);
  console.log("user logged in", { user });
  return user;
};
