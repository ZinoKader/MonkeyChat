import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
  },
  title: {
    width: '100%',
    height: 'auto',
    textAlign: 'center',
  },
});

function AppHeader() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography className={classes.title} variant="h5" color="inherit">
            MonkeyChat
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default AppHeader;
