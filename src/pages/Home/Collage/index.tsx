import React from 'react';

import Carousel from './Carousel';

import './index.css';

const images = ['/Images/Collage1.png', '/Images/Collage2.png', '/Images/Collage3.png'];

const Collage: PageType = function Collage() {
  return (
    <div className="Home">
      <Carousel
        title={
          <div className="Carousel-Title">
            <div className="Carousel-Title-Intro">Hey, I'm</div>
            <div className="Carousel-Title-Name">Karol Bartyzel</div>
          </div>
        }
        images={images}
      />
    </div>
  );
}

export default Collage;
