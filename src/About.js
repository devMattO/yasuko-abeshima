import React, { Component } from 'react';
import MobileRoutesAbout from './mobile-route-about'
import DesktopRoutesAbout from './desktop-route-about'
import './About.css';

class About extends Component {
  render() {
    return (
      <div className='gallery-page'>
        <div className="gallery-container">
          <h1 className="gallery-header">- About -</h1>
          <DesktopRoutesAbout />
        </div>
        <MobileRoutesAbout />
        <div className="intro-container">
          <p className="App-intro">
            Born in Japan, Yasuko Abeshima started her art training in drawing and oil painting in middle school, continued it in high school, and at Gakushuin University in Tokyo and at the University of Wyoming.
          </p>
          <p className="App-intro">
            After moving to Hawaiʻi, she explored media other than watercolor in classes at the University of Hawaiʻi, at the Honolulu Academy of Arts, and in various workshops; in the end, however, she found watercolor to be the most intersting and challenging medium. She became a member of the Hawaiʻi Watercolor Society in 1986, acheiving the signiture status in 1991.
          </p>
          <p className="App-intro">
            Her works have been displayed in numerous juried exhibitions, including many sponsored by the Hawaiʻi Watercolor Society, by the Association of Hawaiʻi Artists, by the Honolulu Japanese Chamber of Commerce, by the National League of American Pen Women, and by the Honolulu Academy of Arts (Artists of Hawaiʻi).
          </p>
          <p className="App-intro">
            The recepient of many awards, Yasuko has won Nest of Show awards fro the Association of Hawaiʻi Artists (1991), the Hawaiʻi Watercolor Society (1999), the HWS Signiture Members exhibition (2008), and most recently, the 50th anniversary open exhibition of the HWS (2012).
          </p>
          <p className="App-intro">
            Her work was also selected for the Inaugural Exhibition of the Hawaiʻi State Museum in November, 2002.
          </p>
          <p className="App-intro">
            Her work has been purchased by the Hawaiʻi State Foundation on Culture and the Arts, by the Hawaiʻi Medical Service Association (HMSA), by the Honolulu Advertiser, and by collectors in Hawaiʻi, on the mainland, and in Japan.
          </p>
        </div>
      </div>
    );
  }
}

export default About;
