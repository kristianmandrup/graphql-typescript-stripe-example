import { validSession } from "..";
import { GetUserFn } from "../../../user";
import { validatedUser, validatedPaidUser } from "./validation";

export const findUserInSession = async (req: any, getUser: GetUserFn) => {
  const session = validSession(req);
  const { userId } = session;
  const user = await getUser(userId);
  return validatedUser(user);
};

export const findPaidUser = async (
  req: any,
  getUser: GetUserFn
): Promise<any> => {
  return validatedPaidUser(await findUserInSession(req, getUser));
};
