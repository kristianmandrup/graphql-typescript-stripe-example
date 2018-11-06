import * as React from "react";
import AppBar from "@material-ui/core/AppBar";
import { withStyles } from "@material-ui/core/styles";
import { styles } from "./styles";
import { Desktop, Mobile } from "./Menu";
import { TopToolbar } from "./TopToolbar";

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
        handleMenuClose: this.handleMenuClose,
        classes
      },
      mobileMenu: {
        isLoggedIn,
        anchorEl: mobileMoreAnchorEl,
        isMenuOpen: isMobileMenuOpen,
        handleMenuClose: this.handleMenuClose,
        handleProfileMenuOpen: this.handleProfileMenuOpen,
        classes
      },
      topbar: {
        desktop: {
          isLoggedIn,
          isMenuOpen,
          handleProfileMenuOpen: this.handleProfileMenuOpen,
          classes
        },
        more: {
          handleMobileMenuOpen: this.handleMobileMenuOpen,
          classes
        },
        classes
      }
    };
    console.log("AppBar", { isLoggedIn, props });
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <TopToolbar {...props.topbar} />
        </AppBar>
        <Desktop.BarMenu {...props.menu} />
        <Mobile.BarMenu {...props.mobileMenu} />
      </div>
    );
  }
}

export default withStyles(styles)(PrimarySearchAppBar);
