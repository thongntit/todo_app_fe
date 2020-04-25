import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles({
  header: {
    background: '#1976d2',
    height: 50,
  },
  title: {
    alignSelf: 'center',
    textAlign: 'center',
  },
  titleText: {
    color: 'white',
    fontWeight: '600',
  },
  pCon: {
    alignSelf: 'center',
    textAlign: 'end',
    paddingRight: 32,
  },
  picture: {
    width: 35,
    height: 35,
    border: '3px solid #00e8ff',
    borderRadius: '50%',
    '&:hover': {
      border: '3px solid #08a6b3',
      cursor: 'pointer',
    },
  },
});

const AppHeader = ({ user, logOut }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleMenu = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
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
          {user && user.ggInfo && user.ggInfo.picture ? (
            <img
              alt="Profile"
              style={{ height: 30, width: 30, borderRadius: 15 }}
              src={user.ggInfo.picture}
            />
          ) : (
            <AccountCircleIcon />
          )}
        </IconButton>
        <Menu
          id="menu-appbar"
          getContentAnchorEl={null}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          open={open}
          onClose={handleClose}
        >
          <MenuItem>
            { user && user.ggInfo ? user.ggInfo.name: ""}
          </MenuItem>
          <Divider />
          <MenuItem>{'Phiên bản 0.1.0'}</MenuItem>
          <Divider />
          <MenuItem onClick={logOut}>Thoát</MenuItem>
        </Menu>
      </Grid>
    </Grid>
  );
};
export default AppHeader;
