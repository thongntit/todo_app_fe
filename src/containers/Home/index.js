import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import TodoList from "../../components/TodoList";
import Menu from "../../components/Menu";
const useStyles = makeStyles({
  container: {
    display: "flex",
    flex: 1,
  },
  bodyContainer: {
    background: "#ececec",
    height: "100%",
  },
});
const Home = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      <Grid item xs={2} className={classes.bodyContainer}>
        <Menu />
      </Grid>
      <Grid item xs={7}>
        <div>
          <TodoList />
        </div>
      </Grid>
      <Grid item xs={3} className={classes.bodyContainer}>
        Detail
      </Grid>
    </Grid>
  );
};
export default Home;
