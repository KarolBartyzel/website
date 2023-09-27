import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { IconContext, IconType } from 'react-icons';

// import './ContactItem.css';

type Props = {
  label: string;
  color?: string;
  Icon: IconType;
  handleClick: () => void;
};

const ContactItem = ({ label, color, Icon, handleClick }: Props) => {
  return (
    <div className="flex flex-col w-40 items-center cursor-pointer">
      <IconContext.Provider value={{ color }}>
        <Icon size="2em" className="cursor-text" onClick={handleClick} />
        <CopyToClipboard text={label}>
          <h3 className="h-8">{label}</h3>
        </CopyToClipboard>
      </IconContext.Provider>
    </div>
  );
};

export default ContactItem;
