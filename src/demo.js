
import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import './App.css';

class Car extends React.Component {
  render() {
    return <h2>I am a {this.props.brand.model}!</h2>;
  }
}

class Garage extends React.Component {
  render() {
    const carinfo = {name: "Ford", model: "Mustang"};
    return (
      <div className="App">
      <h1>Who lives in my garage?</h1>
      <Car brand={carinfo} />
      </div>
    );
  }
}
ReactDOM.render(<Garage />, document.getElementById('root'));

export default Garage;
