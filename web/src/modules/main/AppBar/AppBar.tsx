import * as React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { withStyles } from "@material-ui/core/styles";
import Search from "./Search";
import { styles } from "./styles";
import { TopBarMenu } from "./Menu";
import { TopBarMobileMenu } from "./MobileMenu";
import { Title } from "./Title";
import { MoreBtn } from "./MoreBtn";
import { DrawerBtn } from "./DrawerBtn";
import { DesktopSection } from "./DesktopSection/DesktopSection";

interface Props {
  classes: any;
  isLoggedIn: boolean;
}

class PrimarySearchAppBar extends React.Component<Props> {
  state = {
    anchorEl: null,
    mobileMoreAnchorEl: null
  };

  handleProfileMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
    this.handleMobileMenuClose();
  };

  handleMobileMenuOpen = event => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget });
  };

  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null });
  };

  render() {
    const { anchorEl, mobileMoreAnchorEl } = this.state;
    const { classes, isLoggedIn } = this.props;
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    // See: https://github.com/google/material-design-icons/issues/286#issuecomment-411167707
    const props = {
      menu: {
        isLoggedIn,
        anchorEl,
        isMenuOpen,
        handleMenuClose: this.handleMenuClose
      },
      mobileMenu: {
        isLoggedIn,
        anchorEl: mobileMoreAnchorEl,
        isMenuOpen: isMobileMenuOpen,
        handleMenuClose: this.handleMenuClose,
        handleProfileMenuOpen: this.handleProfileMenuOpen
      },
      desktop: {
        isLoggedIn,
        isMenuOpen,
        handleProfileMenuOpen: this.handleProfileMenuOpen
      },
      more: {
        classes,
        handleMobileMenuOpen: this.handleMobileMenuOpen
      }
    };

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <DrawerBtn classes={classes} />
            <Title classes={classes} />
            <Search />
            <div className={classes.grow} />
            <DesktopSection {...props.desktop} />
            <MoreBtn {...props.more} />
          </Toolbar>
        </AppBar>
        <TopBarMenu {...props.menu} />
        <TopBarMobileMenu {...props.mobileMenu} />
      </div>
    );
  }
}

export default withStyles(styles)(PrimarySearchAppBar);
