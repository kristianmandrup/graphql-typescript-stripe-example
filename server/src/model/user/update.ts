export const updateUser = async (
  user: any,
  stripeId: string,
  ccLast4: any,
  type: string = "paid"
) => {
  user.stripeId = stripeId;
  user.type = type;
  user.ccLast4 = ccLast4;
  await user.save();
  return user;
};
