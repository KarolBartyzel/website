import React from 'react';
import { FaGithubSquare, FaLink } from 'react-icons/fa';

import { ProjectModel } from '../Portfolio.model';

// import './PortfolioItem.css';

type Props = ProjectModel & {
  position: number;
  isInfoVisible: boolean;
  isDemoVisible: boolean;
};

const PortfolioItem = ({
  name,
  position,
  description,
  technologies,
  repoUrl,
  demoUrl,
  isInfoVisible,
  isDemoVisible,
}: Props) => (
  <div className="portfolio-item" style={{ left: `${position}vw` }}>
    {isInfoVisible && (
      <div className="portfolio-item-info">
        <div className="portfolio-item-name">
          <h3>
            <b>Project</b> <i>{name}</i>
          </h3>
        </div>
        <div className="portfolio-item-technologies">
          <h3>
            <b>Technologies</b> <i>{technologies.join(', ')}</i>
          </h3>
        </div>
        <div className="portfolio-item-description">
          <h3>
            <b>Description</b> <i>{description}</i>
          </h3>
        </div>
        <div className="portfolio-item-links">
          <div className="portfolio-item-url">
            <FaGithubSquare size="2.5em" />
            <a href={repoUrl}>Code</a>
          </div>
          <div className="portfolio-item-url">
            <FaLink size="2.5em" />
            <a href={demoUrl}>Demo</a>
          </div>
        </div>
      </div>
    )}
    {isDemoVisible && (
      <div className="portfolio-item-demo">
        <iframe
          title={`${name} - demo`}
          width="100%"
          height="100%"
          src={demoUrl}
        />
      </div>
    )}
  </div>
);

export default PortfolioItem;
