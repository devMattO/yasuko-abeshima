import React, { Component } from 'react';
import Grid from './image-grid.js'
import './Gallery.css';

class Gallery extends Component {
  render() {
    return (
      <div className='gallery-page'>
        <div className="gallery-container">
          <h1 className="gallery-header">Gallery</h1>
        </div>
        <Grid />
      </div>
    );
  }
}

export default Gallery;
