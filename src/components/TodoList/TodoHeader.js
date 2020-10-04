import React from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core';
import { stringToday } from "constants/date"
const useStyles = makeStyles({
  container: {
    padding: 16,
  },
});
const TodoHeader = () => {
  const classes = useStyles();
  const today = new Date();
  return (
    <Grid container className={classes.container}>
      <Grid item xs={12}>
        <Typography variant="h5">Ngày của tôi</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body2">{`${stringToday[today.getDay()]} ${today.getDate()} tháng ${today.getMonth() + 1}`}</Typography>
      </Grid>
    </Grid>
  );
};
export default TodoHeader;
