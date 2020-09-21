import {
  AppBar,
  Avatar,
  Button,
  Divider,
  Menu,
  MenuItem,
  Toolbar,
} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import React, { useState } from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

type AppHeaderProps = {
  user: any;
  logOut: any;
};
const AppHeader: React.FC<AppHeaderProps> = ({ user, logOut }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const handleMenu = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Việc phải làm
          </Typography>
          <Button color="inherit" onClick={handleMenu}>
            <Avatar alt="Profile" src={user?.ggInfo?.picture} />
          </Button>
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
            <MenuItem>{user && user.ggInfo ? user.ggInfo.name : ''}</MenuItem>
            <Divider />
            <MenuItem>{'Phiên bản 0.1.0'}</MenuItem>
            <Divider />
            <MenuItem onClick={logOut}>Thoát</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default AppHeader;
