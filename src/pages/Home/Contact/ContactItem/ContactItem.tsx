import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { IconContext, IconType } from 'react-icons';

import './ContactItem.css';

const ContactItem = ({ label, color, Icon, handleClick }: ContactItemProps) => {
  return (
    <div className="contact-item">
      <IconContext.Provider value={{ color }}>
        <Icon size="2em" className="contact-item-icon" onClick={handleClick} />
        <CopyToClipboard text={label}>
          <h3 className="contact-item-caption">{label}</h3>
        </CopyToClipboard>
      </IconContext.Provider>
    </div>
  );
};

type ContactItemProps = {
  label: string;
  color?: string;
  Icon: IconType;
  handleClick: () => void;
};

export default ContactItem;
