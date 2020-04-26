import React, { useEffect } from 'react';
import { Input, makeStyles, Grid } from '@material-ui/core';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import DateRangeIcon from '@material-ui/icons/DateRange';
import RepeatIcon from '@material-ui/icons/Repeat';
import DescriptionIcon from '@material-ui/icons/Description';
import { DateTimePicker } from '@material-ui/pickers';
const useStyles = makeStyles({
  funcContainer: {
    height: 52,
    paddingTop: 8,
    paddingBottom: 8,
  },
  funcText: {
    borderBottom: '1px solid #ececec',
  },
});
const DetailExtra = ({ todo, updateTodo }) => {
  const classes = useStyles();
  const handlePressEnter = (event) => {
    if (event.keyCode === 13) {
      updateTodo({
        ...todo,
        description: event.currentTarget.value,
      });
    }
  };
  const handleDateChange = (value) => {
    updateTodo({
        ...todo,
        dueTime: value,
      });
  }
  useEffect(() => {
    document.getElementById('input-description').value =
      todo && todo.description ? todo.description : 'Thêm ghi chú';
  }, [todo]);
  return (
    <>
      <Grid container className={classes.funcContainer}>
        <Grid item xs={1}>
          <DescriptionIcon />
        </Grid>
        <Grid item xs={10} className={classes.funcText}>
          <Input
            id="input-description"
            disableUnderline
            onKeyDown={handlePressEnter}
          />
        </Grid>
      </Grid>
      <Grid container className={classes.funcContainer}>
        <Grid item xs={1}>
          <DateRangeIcon />
        </Grid>
        <Grid item xs={10} className={classes.funcText}>
          <DateTimePicker
            value={new Date(todo ? todo.dueTime: null)}
            onChange={handleDateChange}
            InputProps={{
              disableUnderline: true,
            }}
          />
        </Grid>
      </Grid>
      <Grid container className={classes.funcContainer}>
        <Grid item xs={1}>
          <NotificationsNoneIcon />
        </Grid>
        <Grid item xs={10} className={classes.funcText}>
          Nhắc tôi
        </Grid>
      </Grid>

      <Grid container className={classes.funcContainer}>
        <Grid item xs={1}>
          <RepeatIcon />
        </Grid>
        <Grid item xs={10} className={classes.funcText}>
          Lặp lại
        </Grid>
      </Grid>
    </>
  );
};
export default DetailExtra;
