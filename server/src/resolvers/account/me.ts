import { User } from "../user";
export const me = (_: any, __: any, { req }: any) => {
  if (!req.session.userId) {
    return null;
  }

  return User.findOne(req.session.userId);
};
