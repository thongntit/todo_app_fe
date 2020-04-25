import React, { useEffect } from 'react';
import { makeStyles, Grid, Checkbox, Input } from '@material-ui/core';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
const useStyles = makeStyles({
  textAlign: {
    alignSelf: 'center',
  },
});
const DetailTitle = ({ todo, updateTodo }) => {
  const classes = useStyles();
  useEffect(() => {
    const todoInput = document.getElementById('title-input');
    todoInput.value = todo ? todo.title : '';
  }, [todo]);
  const handleChange = (event) => {
    updateTodo({
      ...todo,
      status: event.target.checked ? 'Completed' : 'Incomplete',
    });
  };
  const handlePressEnter = (event) => {
    if (event.keyCode === 13) {
      const inputTitle = document.getElementById('title-input');
      updateTodo({
        ...todo,
        title: inputTitle.value,
      });
    }
  };
  return (
    <Grid container>
      <Grid item>
        <Checkbox
          icon={<RadioButtonUncheckedIcon />}
          checkedIcon={<CheckCircleOutlineIcon />}
          checked={todo && todo.status === 'Completed' ? true : false}
          onChange={handleChange}
          id="checkbox"
          color="primary"
        />
      </Grid>
      <Grid item className={classes.textAlign}>
        <Input
          id="title-input"
          //   value={title}
          onChange={handleChange}
          onKeyDown={handlePressEnter}
          disableUnderline
        />
      </Grid>
    </Grid>
  );
};
export default DetailTitle;
