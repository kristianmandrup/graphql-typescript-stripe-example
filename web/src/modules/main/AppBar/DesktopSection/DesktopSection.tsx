import * as React from "react";
import { RegisterBtn } from "./RegisterBtn";
import { NotificationsBtn } from "./NotificationsBtn";
import { UserMenuBtn } from "./UserMenuBtn";
import { DashboardBtn } from "./DashboardBtn";
import { LoginBtn } from "./LoginBtn";

export const DesktopSection = (props: any) => {
  const { classes } = props;
  return (
    <div className={classes.sectionDesktop}>
      <DashboardBtn {...props} />
      <RegisterBtn {...props} />
      <LoginBtn {...props} />
      <NotificationsBtn {...props} />
      <UserMenuBtn {...props} />
    </div>
  );
};
