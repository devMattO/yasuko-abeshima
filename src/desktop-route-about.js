import React, { Component } from 'react';
import Radium from 'radium'
import { Link } from 'react-router'
import home_icon from './pics/icon.svg';
import gallery_icon from './pics/gallery.svg';

let RadiumLink = Radium(Link)

class DesktopRoutesAbout extends Component {
  render(){
    return (
      <div className="desktop-menu">
        <RadiumLink className="gallery-menu-desk" to="/">
          <div className="gallery-link-desk" id="gallery-home-route-desk">
            <span id="home-icon-container"><img id="home-icon" role="presentation" src={home_icon} /></span> Home
          </div>
        </RadiumLink>
        <RadiumLink className="gallery-menu-desk" to="/gallery">
          <div className="gallery-link-desk" id="gallery-about-route-desk">
            <span id="home-icon-container"><img id="home-icon" role="presentation" src={gallery_icon} /></span> Gallery
          </div>
        </RadiumLink>
      </div>
    )
  }
}

export default DesktopRoutesAbout;