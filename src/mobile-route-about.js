import React, { Component } from 'react';
import Radium from 'radium'
import { Link } from 'react-router'

let RadiumLink = Radium(Link)

class MobileRoutesAbout extends Component {
  render(){
    return (
      <div className="routes">
        <RadiumLink className="gallery-menu" to="/">
          <div className="gallery-link" id="gallery-home-route">
            Home
          </div>
        </RadiumLink>
        <RadiumLink className="gallery-menu" to="/gallery">
          <div className="gallery-link" id="gallery-about-route">
            Gallery
          </div>
        </RadiumLink>
      </div>
    )
  }
}

export default MobileRoutesAbout;