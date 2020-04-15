import React from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";

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
        <Typography variant="body2">{`Ngày ${today.getDate()} tháng ${today.getMonth()} năm ${today.getFullYear()}`}</Typography>
      </Grid>
    </Grid>
  );
};
export default TodoHeader;
