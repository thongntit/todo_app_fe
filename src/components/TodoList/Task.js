import React, { useContext } from 'react';
import {
  Grid,
  FormControlLabel,
  Checkbox,
  makeStyles,
  IconButton,
} from '@material-ui/core';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import DeleteIcon from '@material-ui/icons/Delete';
import TodosContext from '../../contexts/todos';
const useStyles = makeStyles({
  container: {
    marginLeft: 8,
    padding: 8,
    borderBottom: '1px solid #ececec',
    '&:hover': {
      backgroundColor: '#ececec',
      cursor: 'pointer',
    },
  },
  checkedRow: {
    marginLeft: 8,
    padding: 8,
    backgroundColor: '#ecf4fc',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  taskDetail: {
    alignSelf: 'center',
  },
});
const TodoList = ({ detail, updateTodo, deleteTodo }) => {
  const classes = useStyles();
  const todos = useContext(TodosContext);
  const rowClick = () => {
    todos.setSelectedId(detail.id);
  };
  const handleChange = (event) => {
    updateTodo({
      ...detail,
      status: event.target.checked ? 'Completed' : 'Incomplete',
    });
  };
  const handleDelete = () => {
    deleteTodo({
      ...detail,
    });
  };
  return (
    <Grid
      container
      className={
        detail.id === todos.selectedId ? classes.checkedRow : classes.container
      }
    >
      <Grid item xs={11} onClick={rowClick}>
        <FormControlLabel
          control={
            <Checkbox
              icon={<RadioButtonUncheckedIcon />}
              checkedIcon={<CheckCircleOutlineIcon />}
              checked={detail && detail.status === 'Completed' ? true : false}
              onChange={handleChange}
              name="checkedB"
              color="primary"
            />
          }
        />
        {detail.title}
      </Grid>
      <Grid item xs={1}>
        <IconButton onClick={handleDelete}>
          <DeleteIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
};
export default TodoList;
