import React from 'react';

import Carousel from './Carousel';
import Im1 from './images/im1.png';
import Im2 from './images/im2.png';
import Im3 from './images/im3.png';

import './index.css';

const images = [Im1, Im2, Im3];

export default function Collage(props) {
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
