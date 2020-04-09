import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  app: {
    height: "100vh",
    display: "flex",
    flexFlow: "column"
  },
});
function App() {
  const classes = useStyles();
  return (
    <div className={classes.app}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
