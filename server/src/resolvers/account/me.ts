import { User } from "../user";
const { log } = console;
const hasUser = (req: any): boolean => Boolean(req.session.userId);

export const me = async (_: any, __: any, { req }: any): Promise<any> => {
  if (!hasUser(req)) {
    return null;
  }
  const user = await User.findOne(req.session.userId);
  log("me", { user });
  return user;
};
