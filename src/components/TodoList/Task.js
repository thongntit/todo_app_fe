import React, { useState } from 'react';
import {
  Grid,
  FormControlLabel,
  Checkbox,
  makeStyles,
} from '@material-ui/core';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
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
const TodoList = () => {
  const classes = useStyles();
  const [state, setState] = useState({
    starred: false,
    checkedB: false,
  });
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  const rowClick = () => {
    setState({
      ...state,
      checkedB: !state.checkedB,
    });
  };
  return (
    <Grid
      container
      className={state.checkedB ? classes.checkedRow : classes.container}
      onClick={rowClick}
    >
      <Grid item xs={1}>
        <FormControlLabel
          control={
            <Checkbox
              icon={<RadioButtonUncheckedIcon />}
              checkedIcon={<CheckCircleOutlineIcon />}
              checked={state.checkedB}
              onChange={handleChange}
              name="checkedB"
              color="primary"
            />
          }
        />
      </Grid>
      <Grid item xs={10} className={classes.taskDetail}>
        Task
      </Grid>
      <Grid item xs={1}>
        <FormControlLabel
          control={
            <Checkbox
              icon={<StarBorderIcon />}
              checkedIcon={<StarIcon />}
              checked={state.starred}
              onChange={handleChange}
              name="starred"
              color="primary"
            />
          }
        />
      </Grid>
    </Grid>
  );
};
export default TodoList;
