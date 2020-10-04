import {
  Box,
  Checkbox, Grid, IconButton, makeStyles, CircularProgress
} from '@material-ui/core';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import DeleteIcon from '@material-ui/icons/Delete';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import React, { useContext } from 'react';
import TodosContext from '../../contexts/todos';
const useStyles = makeStyles((theme) => ({
  container: {
    marginLeft: 8,
    padding: 8,
    borderBottom: '1px solid #ececec',
    '&:hover': {
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
  }
}));
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
  const isSelected = detail.id === todos.selectedId
  return (
    <Grid
      container
      justify="space-between"
      className={
        isSelected ? classes.checkedRow : classes.container
      }
    >
      <Box onClick={rowClick} flexDirection="row" display="flex">
        <Checkbox
          icon={isSelected && todos.loading ? <CircularProgress size={24} className={classes.fabProgress} color="default" thickness="6" /> : <RadioButtonUncheckedIcon />}
          checkedIcon={isSelected && todos.loading ? <CircularProgress size={24} className={classes.fabProgress} color="default" thickness="6" /> : <CheckCircleOutlineIcon />}
          checked={detail && detail.status === 'Completed' ? true : false}
          onChange={handleChange}
          name="checkedB"
          color="default"
        />
        <Box alignSelf="center" fontWeight="fontWeightBold">
          {detail.title}
        </Box>
      </Box>
      <Box>
        <IconButton onClick={handleDelete}>
          <DeleteIcon />
        </IconButton>
      </Box>
    </Grid>
  );
};
export default TodoList;
