import React from 'react';
import ReactDOM from 'react-dom';
import MessageList from './components/MessageList'
import AppHeader from './components/AppHeader'
import UserDialog from './components/UserDialog'
import MessageBar from './components/MessageBar'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const monkeytheme = createMuiTheme({
  palette: {
    primary: {
        main: '#F1EF1F'
      }
    }
  },
)

class App extends React.Component {

  constructor(props) {
    super(props)
    this.setUsername = this.setUsername.bind(this);
    this.getUsername = this.getUsername.bind(this);
    this.state = {
      userName: ''
    }
  }

  setUsername(username) {
    this.setState({userName: username})
  }

  getUsername() {
    return this.state.userName;
  }

  render() {
    return (
      <div>
        <MuiThemeProvider theme={monkeytheme}>
          <AppHeader />
          <UserDialog setUsername={this.setUsername} />
          <MessageList />
          <MessageBar getUsername={this.getUsername} />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
