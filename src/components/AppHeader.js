import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Redirect } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Cookies from "universal-cookie";
const cookies = new Cookies();

const useStyles = makeStyles({
  header: {
    background: "#1976d2",
    height: 50,
  },
  title: {
    alignSelf: "center",
    textAlign: "center",
  },
  titleText: {
    color: "white",
    fontWeight: "600",
  },
  pCon: {
    alignSelf: "center",
    textAlign: "end",
    paddingRight: 32,
  },
  picture: {
    width: 35,
    height: 35,
    border: "3px solid #00e8ff",
    borderRadius: "50%",
    "&:hover": {
      border: "3px solid #08a6b3",
      cursor: "pointer",
    },
  },
});

const AppHeader = ({ user }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [isLogout, setIsLogout] = useState(false);
  const handleMenu = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleLogOut = () => {
    cookies.remove("todo-app-token");
    cookies.remove("todo-app-expired-time");
    setIsLogout(true);
  };
  return (
    <Grid container className={classes.header}>
      <Grid className={classes.title} item xs={2}>
        <Typography className={classes.titleText} variant="h6">
          Todoist
        </Typography>
      </Grid>
      <Grid item xs={8}></Grid>
      <Grid item xs={2} className={classes.pCon}>
        <IconButton onClick={handleMenu}>
          {user && user.profile.photoURL ? (
            <img
              alt="Profile"
              style={{ height: 30, width: 30, borderRadius: 15 }}
              src={user.profile.photoURL}
            />
          ) : (
            <AccountCircleIcon />
          )}
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={open}
          onClose={handleClose}
        >
          <MenuItem>
            {/* {user.profile.asia_id} - {user.profile.displayName} */}
          </MenuItem>
          <Divider />
          <MenuItem>{"Phiên bản"}</MenuItem>
          <Divider />
          <MenuItem onClick={handleLogOut}>Thoát</MenuItem>
        </Menu>
      </Grid>
      {isLogout ? <Redirect to="/sign-in" /> : null}
    </Grid>
  );
};
export default AppHeader;
