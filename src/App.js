import React, { Component } from 'react';
import './App.css';
import watercolor_svg from './pics/watercolor.svg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="transparent-header">
            <img id="watercolor-svg" src={watercolor_svg} role="presentation" />
            <h2>Yasuko Abeshima</h2>
          </div>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
