import React, { Component } from 'react';
import { Link } from 'react-router'
import Radium from 'radium'
import ImageLightbox from './lightbox.js'
import './Gallery.css';

let RadiumLink = Radium(Link)

class Gallery extends Component {
  render() {
    return (
      <div className='gallery-page'>
        <div className="gallery-container">
          <h1 className="gallery-header">- Gallery -</h1>
        </div>
        <div className="routes">
          <RadiumLink className="gallery-menu" to="/">
            <div className="gallery-link" id="gallery-home-route">
              Home
            </div>
          </RadiumLink>
          <RadiumLink className="gallery-menu" to="/about">
            <div className="gallery-link" id="gallery-about-route">
              About
            </div>
          </RadiumLink>
        </div>
        <div className="lightbox-container">
          <ImageLightbox />
        </div>
      </div>
    );
  }
}

export default Gallery;
