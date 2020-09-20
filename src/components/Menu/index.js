import React, { useState } from 'react';
import { Grid, makeStyles, Drawer } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuRow from './MenuRow';
import { LIST_MENU } from '../../constants/listmenu';
const useStyles = makeStyles({
  container: {
    padding: 16,
  },
});
const Menu = () => {
  const classes = useStyles();
  const [selectedRow, setSelectedRow] = useState(false);
  return (
    <Grid container className={classes.container}>
      <Grid item xs={12}>
        <IconButton>
          <MenuIcon />
        </IconButton>
      </Grid>
      <Grid item xs={12}>
        <Drawer anchor="left" >
          {LIST_MENU.map((menu) => (
            <MenuRow
              key={menu.id}
              detail={menu}
              selected={selectedRow}
              setSelected={setSelectedRow}
            />
          ))}
        </Drawer>

      </Grid>
    </Grid>
  );
};
export default Menu;
