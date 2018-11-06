import * as React from "react";

import Toolbar from "@material-ui/core/Toolbar";
import { Title } from "./Title";
import { MoreBtn } from "./MoreBtn";
import { DrawerBtn } from "./DrawerBtn";
import Search from "./Search";
import { DesktopSection } from "./DesktopSection";

export const TopToolbar = ({ classes, more, desktop }: any) => (
  <Toolbar>
    <DrawerBtn classes={classes} />
    <Title classes={classes} />
    <Search />
    <div className={classes.grow} />
    <DesktopSection {...desktop} />
    <MoreBtn {...more} />
  </Toolbar>
);
