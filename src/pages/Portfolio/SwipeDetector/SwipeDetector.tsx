import React, { useState } from 'react';
import classnames from 'classnames';

// import './SwipeDetector.css';

type Props = {
  isSwipeLeftDisabled: boolean;
  isSwipeRightDisabled: boolean;
  handleSwipeLeft: () => void;
  handleSwipeRight: () => void;
};

const SwipeDetector = ({
  isSwipeLeftDisabled,
  isSwipeRightDisabled,
  handleSwipeLeft,
  handleSwipeRight,
}: Props) => {
  const [startClientX, setStartClientX] = useState(0);

  const handleTouchStart: React.TouchEventHandler<HTMLDivElement> = e => {
    const [{ clientX: startClientX }] = Array.from(e.changedTouches);
    setStartClientX(startClientX);
  };

  const handleTouchEnd: React.TouchEventHandler<HTMLDivElement> = e => {
    const [{ clientX: endClientX }] = Array.from(e.changedTouches);
    const diffClientX = endClientX - startClientX;
    if (diffClientX > 5) {
      handleSwipeRight();
    } else if (diffClientX < -5) {
      handleSwipeLeft();
    }
  };

  return (
    <div
      className="swipe-detector"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className={classnames('swipe-arrows', {
          'swipe-arrows--disabled': isSwipeLeftDisabled,
        })}
      >{`<<<`}</div>
      Swipe horizontally to see other projects
      <div
        className={classnames('swipe-arrows', {
          'swipe-arrows--disabled': isSwipeRightDisabled,
        })}
      >{`>>>`}</div>
    </div>
  );
};

export default SwipeDetector;
