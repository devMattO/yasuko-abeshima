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
        <div className="intro-container">
          <p className="App-intro">
            Born in Japan, Yasuko Abeshima started her art training in drawing and oil painting in middle school, continued it in high school, and at Gakushuin University in Tokyo and at the University of Wyoming.
          </p>
          <p className="App-intro">
            After moving to Hawaiʻi, she explored media other than watercolor in classes at the University of Hawaiʻi, at the Honolulu Academy of Arts, and in various workshops; in the end, however, she found watercolor to be the most intersting and challenging medium. She became a member of the Hawaiʻi Watercolor Society in 1986, acheiving the signiture status in 1991.
          </p>
        </div>
      </div>
    );
  }
}

export default App;
