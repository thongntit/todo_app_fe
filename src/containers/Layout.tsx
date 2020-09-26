import { makeStyles } from '@material-ui/core';
import clsx from 'clsx';
import AppBar from 'components/AppBar';
import Sidebar from 'components/SideBar';
import React, { useState } from 'react';
import { DRAWER_WIDTH, APPBAR_HEIGHT } from 'constants/ui';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  content: {
    marginTop: APPBAR_HEIGHT,
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -DRAWER_WIDTH,
  },
  contentShift: {
    marginTop: APPBAR_HEIGHT,

    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));
const Layout: React.FC = (props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const toggleSidebar = () => {
    setOpen(!open);
  };
  return (
    <div className={classes.root}>
      <AppBar openSideBar={toggleSidebar} />
      <Sidebar open={open} />
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        {props.children}
      </main>
    </div>
  );
};

export default Layout;
