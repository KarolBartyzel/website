import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import classnames from 'classnames';

import { useWindowSize, WINDOW_SIZE } from '../../hooks';
import PortfolioItem from './PortfolioItem';
import SwipeDetector from './SwipeDetector';
import { projects } from './Portfolio.model';
import './Portfolio.css';

const Portfolio = () => {
  const windowSize = useWindowSize();
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [isInfoVisible, setIsInfoVisible] = useState(true);
  const [isDemoVisible, setIsDemoVisible] = useState(false);

  const handleClickLeft = () => setActiveProjectIndex(activeProjectIndex - 1);

  const handleClickRight = () => setActiveProjectIndex(activeProjectIndex + 1);

  const handleSwipeLeft = () => {
    if (activeProjectIndex < projects.length - 1) {
      setActiveProjectIndex(activeProjectIndex + 1);
    }
  };

  const handleSwipeRight = () => {
    if (activeProjectIndex > 0) {
      setActiveProjectIndex(activeProjectIndex - 1);
    }
  };

  const handleSwitchInfoClick = () => {
    setIsInfoVisible(true);
    setIsDemoVisible(false);
  };

  const handleSwitchDemoClick = () => {
    setIsInfoVisible(false);
    setIsDemoVisible(true);
  };

  return (
    <div className="portfolio">
      <h1 className="portfolio-title">Portfolio</h1>
      <div className="portfolio-content">
        {windowSize !== WINDOW_SIZE.MOBILE && (
          <FaArrowLeft
            className={classnames('portfolio-arrow', {
              'portfolio-arrow--disabled': activeProjectIndex === 0,
            })}
            size="2em"
            onClick={handleClickLeft}
          />
        )}
        <div className="portfolio-items">
          {projects.map(
            ({ name, description, technologies, repoUrl, demoUrl }, i) => (
              <PortfolioItem
                key={name}
                position={100 * (i - activeProjectIndex)}
                name={name}
                description={description}
                technologies={technologies}
                repoUrl={repoUrl}
                demoUrl={demoUrl}
                isInfoVisible={windowSize === WINDOW_SIZE.WEB || isInfoVisible}
                isDemoVisible={windowSize === WINDOW_SIZE.WEB || isDemoVisible}
              />
            )
          )}
        </div>
        {windowSize !== WINDOW_SIZE.MOBILE && (
          <FaArrowRight
            className={classnames('portfolio-arrow', {
              'portfolio-arrow--disabled':
                activeProjectIndex === projects.length - 1,
            })}
            size="2em"
            onClick={handleClickRight}
          />
        )}
      </div>
      {windowSize !== WINDOW_SIZE.WEB && (
        <div className="portfolio-switch">
          <div
            className={classnames('portfolio-switch-item', {
              'portfolio-switch-item--chosen': isInfoVisible,
            })}
            onClick={handleSwitchInfoClick}
          >
            Information
          </div>
          <div
            className={classnames('portfolio-switch-item', {
              'portfolio-switch-item--chosen': isDemoVisible,
            })}
            onClick={handleSwitchDemoClick}
          >
            Demo
          </div>
        </div>
      )}
      {windowSize === WINDOW_SIZE.MOBILE && (
        <SwipeDetector
          isSwipeRightDisabled={activeProjectIndex === projects.length - 1}
          isSwipeLeftDisabled={activeProjectIndex === 0}
          handleSwipeLeft={handleSwipeLeft}
          handleSwipeRight={handleSwipeRight}
        />
      )}
    </div>
  );
};

export default Portfolio;
