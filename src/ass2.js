import React, { Component } from 'react'
import './App.css'
import Validation from './Validation.js'
import Character from './character.js'

class App2 extends Component {
  state = {
    userInput: '',
  }
  textLengthHandler = event => {
    this.setState({ userInput: event.target.value })
  }

  deleteCharHandler = (index) => {
  const chars = [...this.state.userInput.split('')];
  chars.splice(index, 1);
  this.setState({userInput: chars.join('')});
}

  render () {
    const charList = this.state.userInput.split('').map((char1, index) => (
        <Character
          character={char1}
         handleClick={() => this.deleteCharHandler(index)}
        />
      ))

    const textLength = this.state.userInput.length;

    return (
      <div className='App'>
        <input
          type='text'
          onChange={this.textLengthHandler}
          value={this.state.userInput}

        ></input>
        <p>
          {this.state.userInput} <br /> Text length:{textLength}
        </p>
        <br />
        <Validation textLength={textLength} />
        {charList}
      </div>
    )
  }
}

export default App2
