import React from 'react';
import Button from '@material-ui/core/Button'
import Icon from '@material-ui/core/Icon';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
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
    message: 'hey there!'
    })
    .then(function (response) {
      console.log(response);
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
      <div className="root">
        <form onSubmit={this.handleSubmit} className="container" noValidate autoComplete="off">
          <TextField className="textfield"
            value={this.state.message}
            onChange={this.handleChange}
            id="message-input"
            label="Message"
            placeholder="Recommended conversation topics include bananas and lianas"
            margin="normal"
            variant="filled"
          />
          <Button type="submit" variant="contained" color="primary" className="button">
            Send
            <Icon className="sendIcon">send</Icon>
          </Button>
        </form>
      </div>
    );
  }
}

export default MessageBar;
