import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './index.css';

export default function NavigationItem({ isCurrent, onClick, title, Icon }) {
    return (
        <div className={classnames('Navigation-Menu-Item', { 'Navigation-Menu-Item--current': isCurrent })} onClick={onClick}>
            {<Icon style={{ margin: '0 10px' }} />}<span className="Navigation-Menu-Item-Title">{title}</span>
        </div>
    );
}

NavigationItem.propTypes = {
    title: PropTypes.string.isRequired,
    Icon: PropTypes.element.isRequired,
    isCurrent: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
};
