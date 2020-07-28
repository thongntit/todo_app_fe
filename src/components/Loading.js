import CircularProgress from '@material-ui/core/CircularProgress';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import todoImg from '../static/todo.png';
const useStyles = makeStyles({
  app: {
    height: '100vh',
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  spinner: {
    color: '#FF0',
  },
});
const Loading = () => {
  const classes = useStyles();

  return (
    <div className={classes.app}>
      <img src={todoImg} alt="Việc phải làm" />
      <CircularProgress className={classes.spinner} />
    </div>
  );
};

export default Loading;
