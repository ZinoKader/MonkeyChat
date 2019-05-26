import React from 'react';
import axios from 'axios';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import '../style/MessageList.css';


class MessageList extends React.Component {

  constructor(props) {
    super(props)
    this.state = {oldmessages: [], messages: []}
    this.pollingUrl = 'http://0.0.0.0:8990/api/messages/';
    this.pollingFrequency = 250;
    this.getMessages = this.getMessages.bind(this);
    this.scrollToBottom = this.scrollToBottom.bind(this);
  }

  componentDidMount() {
    this.timer = setInterval(() => this.getMessages(), this.pollingFrequency);
  }

  async getMessages() {
    try {
      const response = await axios.get(this.pollingUrl);
      if(this.state.oldmessages.length != response.data.length) {
        //reformat timestamp to human-readable
        response.data.forEach((item, i) => {
          var date = new Date(item.timestamp);
          var formattedDate = date.toLocaleDateString("sv-se") + " - " + date.toLocaleTimeString("sv-se")
          response.data[i].timestamp = formattedDate
        })
        this.setState({messages: response.data, oldmessages: response.data})
        this.scrollToBottom();
      }
    } catch (error) {
      console.error(error);
    }
  }

  scrollToBottom() {
    this.messagesEnd.scrollIntoView({ behavior: "smooth" });
  }

  render() {
    return (
      <div className="list-root">
        <List className="list-messages">
          {this.state.messages.map(entry => {
            return (
              <ListItem text>
                <ListItemText className="list-listItem" primary={entry.sender} secondary={entry.message} />
                <p className="list-timestamp">{entry.timestamp}</p>
              </ListItem>
            )
          })}
          <div style={{ float:"left", clear: "both" }}
            ref={(listend) => { this.messagesEnd = listend; }}>
          </div>
        </List>
      </div>
    );
  }
}

export default MessageList;
