import { useLayoutEffect, useState } from 'react';

import { TRESHOLD, WINDOW_SIZE } from './useWindowSize.model';

const useWindowSize = () => {
  const [width, setWidth] = useState(0);
  useLayoutEffect(() => {
    const updateSize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return width <= TRESHOLD ? WINDOW_SIZE.MOBILE : WINDOW_SIZE.WEB;
};

export default useWindowSize;
