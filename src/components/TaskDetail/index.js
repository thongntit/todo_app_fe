import React, { useState } from "react";
import {
  Grid,
  FormControlLabel,
  Checkbox,
  makeStyles,
  Typography,
  Input,
} from "@material-ui/core";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import DateRangeIcon from "@material-ui/icons/DateRange";
import RepeatIcon from "@material-ui/icons/Repeat";
const useStyles = makeStyles({
  container: {
    padding: 8,
  },
  paper: {
    backgroundColor: "white",
    padding: "16px 16px",
    margin: 8,
  },
  funcContainer: {
    height: 52,
    paddingTop: 8,
    paddingBottom: 8,
  },
  funcText: {
    borderBottom: "1px solid #ececec",
  },
});
const TaskDetail = () => {
  const classes = useStyles();
  const [checkedB, setChecked] = useState(false);
  const handleChange = () => {
    setChecked(!checkedB);
  };
  return (
    <Grid container className={classes.container}>
      <Grid item xs={12} className={classes.paper}>
        <FormControlLabel
          control={
            <React.Fragment>
              <Checkbox
                icon={<RadioButtonUncheckedIcon />}
                checkedIcon={<CheckCircleOutlineIcon />}
                checked={checkedB}
                onChange={handleChange}
                name="checkedB"
                color="primary"
              />
              <Typography>TaskLabel</Typography>
            </React.Fragment>
          }
        />
      </Grid>
      <Grid item xs={12} className={classes.paper}>
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
        <Input
        placeholder="Thêm ghi chú"
        disableUnderline
        />
      </Grid>
    </Grid>
  );
};
export default TaskDetail;
