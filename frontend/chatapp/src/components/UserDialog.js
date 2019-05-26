import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class UserDialog extends React.Component {

  constructor(props) {
    super(props);
    this.state = {userName:'', dialogOpen:'true'}
    this.handleChange = this.handleChange.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleChange(e) {
    this.setState({userName: e.target.value });
  }

  handleClose() {
    this.setState({dialogOpen: ''});
    this.props.setUsername(this.state.userName)
  }

  render() {
    return (
      <div>
        <Dialog open={this.state.dialogOpen} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Set username</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              value={this.state.userName}
              onChange={this.handleChange}
              margin="dense"
              id="name"
              label="Username"
              type="text"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="#ffffff">
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default UserDialog;
