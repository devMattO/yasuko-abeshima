import React, { Component } from 'react';
import './App.css';
import watercolor_svg from './pics/watercolor.svg';
import { Link } from 'react-router'
import Radium from 'radium'

let RadiumLink = Radium(Link)

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="transparent-header">
            <img id="watercolor-svg" src={watercolor_svg} role="presentation" />
            <h1>Yasuko Abeshima</h1>
            <div className="nav-menu">
              <div className="nav-element">
                <RadiumLink className="menu-item" to="/about">About</RadiumLink>
              </div>
              <div className="nav-element">
                <RadiumLink className="menu-item" to="/gallery">Gallery</RadiumLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
