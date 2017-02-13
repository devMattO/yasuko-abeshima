import React, { Component } from 'react';
import ImageLightbox from './lightbox'
import MobileRoutes from './mobile-route-gallery'
import DesktopRoutes from './desktop-route-gallery'
import './Gallery.css';

class Gallery extends Component {
  render() {
    return (
      <div className='gallery-page'>
        <div className="gallery-container">
          <h1 className="gallery-header">- Gallery -</h1>
          <DesktopRoutes />
        </div>
        <MobileRoutes />
        <div className="lightbox-container">
          <ImageLightbox />
        </div>
      </div>
    );
  }
}

export default Gallery;
