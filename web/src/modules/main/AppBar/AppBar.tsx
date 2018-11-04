import * as React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import { withStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import AccountIcon from "@material-ui/icons/AccountCircle";
import RegisterIcon from "@material-ui/icons/PersonAdd";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Search from "./Search";
import { styles } from "./styles";
import { Link } from "react-router-dom";
import { TopBarMenu } from "./Menu";
import { TopBarMobileMenu } from "./MobileMenu";
import { Title } from "./Title";
import { More } from "./More";

interface Props {
  classes: any;
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
    const { classes } = this.props;
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    // See: https://github.com/google/material-design-icons/issues/286#issuecomment-411167707
    const renderMenu = () => {
      const props = {
        anchorEl,
        isMenuOpen,
        handleMenuClose: this.handleMenuClose
      };
      return <TopBarMenu {...props} />;
    };

    const renderMobileMenu = () => {
      const props = {
        anchorEl: mobileMoreAnchorEl,
        isMenuOpen: isMobileMenuOpen,
        handleMenuClose: this.handleMenuClose,
        handleProfileMenuOpen: this.handleProfileMenuOpen
      };
      return <TopBarMobileMenu {...props} />;
    };

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Open drawer"
            >
              <MenuIcon />
            </IconButton>
            <Title classes={classes} />
            <Search />
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <Link to="/admin">Admin</Link>
              <Link to="/register">
                <IconButton color="inherit">
                  <RegisterIcon />
                </IconButton>
              </Link>
              <Link to="/notifications">
                <IconButton color="inherit">
                  <Badge badgeContent={3} color="secondary">
                    <NotificationsIcon />
                  </Badge>
                </IconButton>
              </Link>
              <IconButton
                aria-owns={isMenuOpen ? "material-appbar" : undefined}
                aria-haspopup="true"
                onClick={this.handleProfileMenuOpen}
                color="inherit"
              >
                <AccountIcon />
              </IconButton>
            </div>
            <More
              classes={classes}
              handleMobileMenuOpen={this.handleMobileMenuOpen}
            />
          </Toolbar>
        </AppBar>
        {renderMenu}
        {renderMobileMenu}
      </div>
    );
  }
}

export default withStyles(styles)(PrimarySearchAppBar);
