import { useLayoutEffect, useState } from 'react';

import { WINDOW_SIZE } from './useWindowSize.model';

const useWindowSize = () => {
  const [width, setWidth] = useState(0);
  useLayoutEffect(() => {
    const updateSize = () => setWidth(window.innerWidth);
    window.addEventListener('load', updateSize);
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => {
      window.removeEventListener('resize', updateSize);
      window.removeEventListener('resize', updateSize);
    };
  }, []);

  return width < WINDOW_SIZE.S
    ? WINDOW_SIZE.XS
    : width < WINDOW_SIZE.M
    ? WINDOW_SIZE.S
    : width < WINDOW_SIZE.L
    ? WINDOW_SIZE.M
    : width < WINDOW_SIZE.XL
    ? WINDOW_SIZE.L
    : WINDOW_SIZE.XL;
};

export default useWindowSize;
