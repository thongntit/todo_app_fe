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
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
  const handleClick = () => {
    const element = document.getElementById('avatar-picture');
    setAnchorEl(element);
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
          <IconButton color="inherit" onClick={handleClick}>
            <Avatar
              id="avatar-picture"
              alt="Profile"
              src={user?.ggInfo?.picture}
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
            <MenuItem>{user?.ggInfo?.name}</MenuItem>
            <Divider />
            <MenuItem>{'Phiên bản 0.1.0'}</MenuItem>
            <Divider />
            <MenuItem onClick={logOut}>Thoát</MenuItem>
          </Popover>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default AppHeader;
