import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles(theme => ({
  root: {
    height: 'calc(100vh - 180px)',
    top: 30,
    overflowY: 'hidden',
  },
  list: {
    margin: 'auto',
    height: '100%',
    width: '50%',
    overflow: 'scroll',
    transform: 'rotate(-180deg)',
    direction: 'rtl',
    scrollbarWidth: 'none',
  },
  listItem: {
    transform: 'rotate(180deg)',
  },
}));

function MessageList() {
  const classes = useStyles();
  var message = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, \
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\
  Etiam erat velit scelerisque in dictum. Vitae nunc sed velit dignissim sodales ut."

  return (
    <div className={classes.root}>
      <List className={classes.list}>
        <ListItem text>
          <ListItemText className={classes.listItem} primary="Zino" secondary={message} />
        </ListItem>
        <ListItem text>
          <ListItemText className={classes.listItem} primary="Sandra" secondary={message} />
        </ListItem>
        <ListItem text>
          <ListItemText className={classes.listItem} primary="Sandra" secondary={message} />
        </ListItem>
        <ListItem text>
          <ListItemText className={classes.listItem} primary="Sandra" secondary={message} />
        </ListItem>
        <ListItem text>
          <ListItemText className={classes.listItem} primary="Sandra" secondary={message} />
        </ListItem>
      </List>
    </div>
  );
}

export default MessageList;
