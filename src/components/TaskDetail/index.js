import React, { useContext } from 'react';
import { Grid, makeStyles, Input } from '@material-ui/core';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import DateRangeIcon from '@material-ui/icons/DateRange';
import RepeatIcon from '@material-ui/icons/Repeat';
import DescriptionIcon from '@material-ui/icons/Description';
import TodosContext from '../../contexts/todos';
import DetailTitle from './DetailTitle';
const useStyles = makeStyles({
  container: {
    padding: 8,
  },
  paper: {
    backgroundColor: 'white',
    padding: '16px 16px',
    margin: 8,
  },
  funcContainer: {
    height: 52,
    paddingTop: 8,
    paddingBottom: 8,
  },
  funcText: {
    borderBottom: '1px solid #ececec',
  },
});
const TaskDetail = () => {
  const classes = useStyles();
  const todos = useContext(TodosContext);
  const selectedTodo = todos.todos.find((todo) => todo.id === todos.selectedId);
  return (
    <Grid container className={classes.container}>
      <Grid item xs={12} className={classes.paper}>
        <DetailTitle todo={selectedTodo} updateTodo={todos.updateTodo} />
      </Grid>
      <Grid item xs={12} className={classes.paper}>
        <Grid container className={classes.funcContainer}>
          <Grid item xs={1}>
            <DescriptionIcon />
          </Grid>
          <Grid item xs={10} className={classes.funcText}>
            {selectedTodo && selectedTodo.description
              ? selectedTodo.description
              : 'Thêm mô tả'}
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
            <DateRangeIcon />
          </Grid>
          <Grid item xs={10} className={classes.funcText}>
            Thêm ngày đến hạn
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
      </Grid>
      <Grid item xs={12} className={classes.paper}>
        <Input placeholder="Thêm ghi chú" disableUnderline />
      </Grid>
    </Grid>
  );
};
export default TaskDetail;
