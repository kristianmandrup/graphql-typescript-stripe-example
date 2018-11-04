import * as React from "react";
import { Link } from "react-router-dom";
import { RegisterBtn } from "./RegisterBtn";
import { NotificationsBtn } from "./NotificationsBtn";
import { UserMenuBtn } from "./UserMenuBtn";

export const DesktopSection = (props: any) => {
  const { classes } = props;
  return (
    <div className={classes.sectionDesktop}>
      <Link to="/admin">Admin</Link>
      <RegisterBtn {...props} />
      <NotificationsBtn {...props} />
      <UserMenuBtn {...props} />
    </div>
  );
};
