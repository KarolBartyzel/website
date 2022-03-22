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

  return width <= WINDOW_SIZE.MOBILE
    ? WINDOW_SIZE.MOBILE
    : width <= WINDOW_SIZE.TABLET
    ? WINDOW_SIZE.TABLET
    : WINDOW_SIZE.WEB;
};

export default useWindowSize;
