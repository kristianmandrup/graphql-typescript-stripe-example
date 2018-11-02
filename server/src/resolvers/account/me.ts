import { User } from "../user";
export const me = async (_: any, __: any, { req }: any) => {
  if (!req.session.userId) {
    return null;
  }
  const user = await User.findOne(req.session.userId);
  console.log("me", { user });
  return;
};
