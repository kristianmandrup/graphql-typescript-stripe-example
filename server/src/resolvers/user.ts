import { User } from "../entity/User";
export { User };

export type GetUserFn = (userId: string) => Promise<User | undefined>;

export const getUser = async (userId: string): Promise<User | undefined> => {
  return await User.findOne(userId);
};

export const findUserByEmail = async (
  email: string
): Promise<User | undefined> => {
  return await User.findOne({ where: { email } });
};
