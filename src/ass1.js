import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOutput';
import UserInput from './UserInput';

class App1 extends Component {
  state = {
    username: [
      'Dhwani',
      'Anjali'
    ]
  }

  usernameEvent = (e) => {
    this.setState({
      username: [
        e.target.value,
        'Anjali'

      ]
    });
  }

  render() {
    return (
      <div className="App">
        <UserInput changed={this.usernameEvent} current={this.state.username[0]}/>
        <UserOutput name={this.state.username[0]} />
        <UserOutput name={this.state.username[1]} />

      </div>
    );
  }
}

export default App1;
