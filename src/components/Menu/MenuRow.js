import React from "react";
import { Grid, Typography, makeStyles } from "@material-ui/core";
import Icon from "@material-ui/core/Icon";
const useStyles = makeStyles({
  container: {
    marginLeft: 8,
    padding: 8,
    "&:hover": {
      backgroundColor: "white",
      cursor: "pointer",
    },
  },
  checkedRow: {
    marginLeft: 8,
    padding: 8,
    backgroundColor: "#dddddd",
    "&:hover": {
      cursor: "pointer",
    },
  },
  selectedLabel:{
      marginLeft: 8,
      color: "#2e5cdb",
      fontWeight: 600
  },
  menuLabel: {
    marginLeft: 8,
  },
});
const MenuRow = ({ detail, selected, setSelected }) => {
  const classes = useStyles();
  const rowClick = () => {
    setSelected(detail.id);
  };
  return (
    <Grid
      container
      className={
        selected === detail.id ? classes.checkedRow : classes.container
      }
      onClick={rowClick}
    >
      <Icon>{detail.icon}</Icon>
      <Typography className={selected === detail.id ? classes.selectedLabel : classes.menuLabel}>
        {detail.label}
      </Typography>
    </Grid>
  );
};
export default MenuRow;
