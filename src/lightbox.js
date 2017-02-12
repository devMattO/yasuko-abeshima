import React, { Component } from 'react';
import Gallery from 'react-photo-gallery';
import getPhotoSet from './photo-set';

export default class ImageLightbox extends Component {
    render() {
      return (
          <Gallery photos={getPhotoSet()} />
      );
    }
}