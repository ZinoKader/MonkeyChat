import React from 'react';
import Button from '@material-ui/core/Button'
import Icon from '@material-ui/core/Icon';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import Paper from '@material-ui/core/Paper';
import '../style/MessageBar.css';

class MessageBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {message:''}
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(e) {
    axios.post('http://0.0.0.0:8990/api/messages/', {
    sender: this.props.getUsername(),
    message: this.state.message,
    })
    .then(function (response) {

    })
    .catch(function (error) {
      console.log(error);
    });
    this.setState({message: ""});
    e.preventDefault();
  }

  handleChange(e) {
    this.setState({message: e.target.value });
  }

  render() {
    return (
      <Paper elevation="6" className="bar-root">
        <form onSubmit={this.handleSubmit} className="bar-container" noValidate autoComplete="off">
          <TextField className="bar-textfield"
            value={this.state.message}
            onChange={this.handleChange}
            id="message-input"
            label="Message"
            placeholder="Recommended conversation topics include bananas and lianas"
            margin="normal"
            variant="filled"
          />
          <Button type="submit" variant="contained" color="primary" className="bar-send-button">
            Send
            <Icon className="bar-sendIcon">send</Icon>
          </Button>
        </form>
      </Paper>
    );
  }
}

export default MessageBar;
