import React from 'react';

import './Photo.css';

const Photo = () => (
  <div className="carousel">
    <div
      className="carousel-item"
      style={{ backgroundImage: `url('/Images/photo.jpg')` }}
    ></div>
  </div>
);

export default Photo;
