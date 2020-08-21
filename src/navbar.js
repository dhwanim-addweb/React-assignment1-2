import React, { Component } from "react";
import {Link} from "react-router-dom";
import './App.css';


class Navbar extends Component {
  render() {
     const nav={
                'width':'100%',
                'float': 'rig 0ht',
                'margin': '0 0 em 0',
                'list-style':'none',
                'background-color': '#ffb3b3',
               'border-top': '1px solid #ccc',
                'float':'right',
    };
    const li={
        'display': 'inline',
          'padding': '8px 15px',
          'text-decoration':'none',
          'font-weight':'bold',
          'font-size': '20px',
          'border-right': '1px solid #ccc',
          'font-family': 'sans-serif',
    };

    return (

      <div style={nav}>


      <ul>

          <Link to="/ass1">
          <li style={li}> Assignment  1</li>
          </Link>

          <Link to="/ass2">
          <li li style={li}> Assignment  2</li>
          </Link>



        </ul>


      </div>

    );
  }
}

export default Navbar;
