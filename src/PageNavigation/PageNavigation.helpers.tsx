import React, { useCallback } from 'react';

const withFocus = (Component: PageComponentModel) => {
  const Comp = (props: ComponentProps) => {
    const pageRef = React.useRef() as React.MutableRefObject<HTMLDivElement>;

    const isFocused = useCallback(() => {
      const lower = pageRef.current.offsetTop - 80;
      const upper = lower + pageRef.current.offsetHeight;
      const { scrollY, innerHeight } = window;
      return (
        (lower < scrollY && upper - scrollY > (innerHeight - 80) / 2) ||
        (lower > scrollY && lower - scrollY < (innerHeight - 80) / 2)
      );
    }, [pageRef]);

    React.useEffect(() => {
      const onWheel = () => {
        if (isFocused()) {
          props.setCurrentPage();
        }
      };
      window.addEventListener('wheel', onWheel);
      return () => {
        window.removeEventListener('wheel', onWheel);
      };
    }, [props, isFocused, pageRef]);

    React.useEffect(() => {
      if (pageRef.current !== undefined && props.isCurrent && !isFocused()) {
        window.scrollTo({
          top: pageRef.current.offsetTop - 80,
          behavior: 'smooth',
        });
      }
    }, [isFocused, pageRef, props.isCurrent]);

    return (
      <div ref={pageRef}>
        <Component {...props} />
      </div>
    );
  };

  return Comp;
};

type ComponentProps = {
  isCurrent: boolean;
  setCurrentPage: () => void;
};

export { withFocus };
