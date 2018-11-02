import { error } from "../";

const validateUser = user =>
  (!user || !user.stripeId) && error("invalid stripe user");

export const validatedUser = (user: any) => {
  validateUser(user);
  return user;
};

const validatePaidUser = user =>
  user.type !== "paid" && error("user has not paid");

export const validatedPaidUser = (user: any) => {
  validatePaidUser(user);
  return user;
};
