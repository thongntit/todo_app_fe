import {
  AppBar,
  Avatar,
  Divider,
  MenuItem,
  Popover,
  Toolbar,
} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import React, { useState, useContext, Dispatch } from 'react';
import AuthContext from 'contexts/auth';

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
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
}));
interface IUserInfo {
  ggInfo?: {
    name: string;
    picture: string;
  };
}
const AppHeader: React.FC<{ openSideBar: Dispatch<any> }> = ({
  openSideBar,
}) => {
  const { userInfo, logOut }: { userInfo: IUserInfo; logOut: any } = useContext(
    AuthContext
  );
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
  const onClickUserMenu = () => {
    const element = document.getElementById('avatar-picture');
    setAnchorEl(element);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <AppBar position="relative" className={classes.appBar}>
        <Toolbar>
          <IconButton onClick={openSideBar}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Việc phải làm
          </Typography>
          <IconButton color="inherit" onClick={onClickUserMenu}>
            <Avatar
              id="avatar-picture"
              alt="Profile"
              src={userInfo?.ggInfo?.picture}
            />
          </IconButton>
          <Popover
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={open}
            onClose={handleClose}
          >
            <MenuItem>{userInfo?.ggInfo?.name}</MenuItem>
            <Divider />
            <MenuItem onClick={logOut}>Thoát</MenuItem>
          </Popover>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default AppHeader;
