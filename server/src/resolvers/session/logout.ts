export const logout = async (_: any, __: any, { req, res }: any) => {
  await new Promise(res => req.session.destroy(() => res()));
  res.clearCookie("connect.sid");
  console.log("user logged out", { session: req.session });
  return true;
};
