import React from 'react';

import './Photo.css';

const Photo = () => (
  <div className="carousel">
    <h1 className="carousel-title">Welcome to my website</h1>
    <div
      className="carousel-item"
      style={{ backgroundImage: `url('/Images/photo.jpg')` }}
    ></div>
  </div>
);

export default Photo;
