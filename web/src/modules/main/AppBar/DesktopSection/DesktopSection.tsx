import * as React from "react";
import { RegisterBtn } from "./RegisterBtn";
import { NotificationsBtn } from "./NotificationsBtn";
import { UserMenuBtn } from "./UserMenuBtn";
import { DashboardBtn } from "./DashboardBtn";

export const DesktopSection = (props: any) => {
  const { classes } = props;
  return (
    <div className={classes.sectionDesktop}>
      <DashboardBtn {...props} />
      <RegisterBtn {...props} />
      <NotificationsBtn {...props} />
      <UserMenuBtn {...props} />
    </div>
  );
};
