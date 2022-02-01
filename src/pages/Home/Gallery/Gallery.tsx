import React from 'react';

import { images as imageUrls } from './Gallery.model';
import './Gallery.css';

const Carousel = (props: CarouselPropsType) => {
  const [index, setIndex] = React.useState(1);
  const [images, setImages] = React.useState(imageUrls.reduce((acc: any, im, i) => {
    acc[i] = im;
    return acc;
  }, { [imageUrls.length]: imageUrls[0] }));

  React.useEffect(() => {
    const interval = window.setInterval(() => {
      if (index > 2) {
        delete images[index - 2];
      }
      images[index + imageUrls.length] = imageUrls[index % imageUrls.length];
      setImages(images);
      setIndex((i) => i + 1);
    }, 2000);
    return () => {
      window.clearInterval(interval);
    };
  }, [index, images]);

  return (
    <div className="carousel">
      <div className="carousel-title">
        Welcome to my website
      </div>
      {Object.entries(images).map(([i, image]: [any, any]) => (
        <div key={i} className={`carousel-item${i > index ? ' carousel-item--hidden' : ''}`} style={{backgroundImage: `url(${image})`, left: `${11 + 80 * (i - index)}vw` }}></div>
      ))}
    </div>
  );
}

type CarouselPropsType = {
  title: string | React.ReactElement,
};

export default Carousel;
