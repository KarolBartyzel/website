import React from 'react';

const withFocus = (Component: PageType) => {
  const Comp = (props: CompType) => {
    const subpageRef = React.useRef() as React.MutableRefObject<HTMLDivElement>;

    React.useEffect(() => {
      window.addEventListener('wheel', onWheel);
      return () => {
        window.removeEventListener('wheel', onWheel);
      };
    }, [subpageRef]);

    React.useEffect(() => {
      if (subpageRef.current !== undefined && props.isCurrent && !isFocused()) {
        window.scrollTo({top: subpageRef.current.offsetTop - 80, behavior: 'smooth'});
      }
    }, [props.isCurrent]);

    const isFocused = () => {
      const lower = subpageRef.current.offsetTop - 80;
      const upper = lower + subpageRef.current.offsetHeight;
      const {scrollY, innerHeight} = window;
      return (lower < scrollY && upper - scrollY > (innerHeight - 80) / 2) ||
             (lower > scrollY && lower - scrollY < (innerHeight - 80) / 2);
    }

    const onWheel = (e: any) => {
      if (isFocused()) {
        props.setCurrentSubpage();
      }
    }

    return (
      <div ref={subpageRef}><Component {...props} /></div>
    );
  };

  return Comp;
};

type CompType = {
  isCurrent: boolean,
  setCurrentSubpage: Function,
};

export { withFocus };
