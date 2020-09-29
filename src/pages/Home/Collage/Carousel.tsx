import React from 'react';
import PropTypes from 'prop-types';

export default function Carousel(props: CarouselPropsType) {
  const [index, setIndex] = React.useState(0);
  const [images, setImages] = React.useState(props.images.reduce((acc: any, im, i) => {
    acc[i] = im;
    return acc;
  }, {}));

  React.useEffect(() => {
    const interval = window.setInterval(() => {
      delete images[index - 1];
      images[index + props.images.length] = props.images[index % props.images.length];
      setImages(images);
      setIndex((i) => i + 1);
    }, 5000);
    return () => {
      window.clearInterval(interval);
    };
  }, [index, images]);

  return (
    <div
      className="Carousel">
      {props.title}
      {Object.entries(images).map(([i, image]: [any, any]) => (
        <div key={i}
          className="Carousel-Item"
          style={{backgroundImage: `url(${image})`, left: `${100 * (i - index)}vw`}}></div>
      ))}
    </div>
  );
}

type CarouselPropsType = {
  images: Array<string>,
  title: string | React.ReactElement,
};
