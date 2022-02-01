import React, { useCallback } from 'react';

const withFocus = (Component: PageType) => {
  const Comp = (props: CompType) => {
    const subpageRef = React.useRef() as React.MutableRefObject<HTMLDivElement>;

    const isFocused = useCallback(() => {
      const lower = subpageRef.current.offsetTop - 80;
      const upper = lower + subpageRef.current.offsetHeight;
      const { scrollY, innerHeight } = window;
      return (
        (lower < scrollY && upper - scrollY > (innerHeight - 80) / 2) ||
        (lower > scrollY && lower - scrollY < (innerHeight - 80) / 2)
      );
    }, [subpageRef]);

    React.useEffect(() => {
      const onWheel = () => {
        if (isFocused()) {
          props.setCurrentSubpage();
        }
      };
      window.addEventListener('wheel', onWheel);
      return () => {
        window.removeEventListener('wheel', onWheel);
      };
    }, [props, isFocused, subpageRef]);

    React.useEffect(() => {
      if (subpageRef.current !== undefined && props.isCurrent && !isFocused()) {
        window.scrollTo({
          top: subpageRef.current.offsetTop - 80,
          behavior: 'smooth',
        });
      }
    }, [isFocused, subpageRef, props.isCurrent]);

    return (
      <div ref={subpageRef}>
        <Component {...props} />
      </div>
    );
  };

  return Comp;
};

type CompType = {
  isCurrent: boolean;
  setCurrentSubpage: () => void;
};

export { withFocus };
