import React from 'react';
import logo from './logo.svg';
import Navbar from './navbar.js';
import App1 from './ass1.js';
import App2 from './ass2.js';
import './App.css';
import {BrowserRouter as Router,Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">

        <Navbar />
            <Switch>

                <Route path="/ass1" component={App1} />
                <Route path="/ass2" component={App2} />

          </Switch>

        </div>
      </Router>
    );
  }



  export default App;
