import React from 'react';

import { images as imageUrls } from './Gallery.model';
import './Gallery.css';

const Gallery = () => {
  const [index, setIndex] = React.useState(1);
  const [images, setImages] = React.useState(
    imageUrls.reduce(
      (acc: { [key: number]: string }, im, i) => {
        acc[i] = im;
        return acc;
      },
      { [imageUrls.length]: imageUrls[0] }
    )
  );

  React.useEffect(() => {
    const interval = window.setInterval(() => {
      if (index > 2) {
        delete images[index - 2];
      }
      images[index + imageUrls.length] = imageUrls[index % imageUrls.length];
      setImages(images);
      setIndex(i => i + 1);
    }, 5000);
    return () => {
      window.clearInterval(interval);
    };
  }, [index, images]);

  return (
    <div className="carousel">
      <div className="carousel-title">Welcome to my website</div>
      {Object.entries(images).map(([i, image]: [string, string]) => (
        <div
          key={i}
          className={`carousel-item${
            Number(i) > index ? ' carousel-item--hidden' : ''
          }`}
          style={{
            backgroundImage: `url(${image})`,
            left: `${21 + 60 * (Number(i) - index)}vw`,
          }}
        ></div>
      ))}
    </div>
  );
};

export default Gallery;
