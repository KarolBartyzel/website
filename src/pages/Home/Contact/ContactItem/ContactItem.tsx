import React, { useEffect, useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { IconContext, IconType } from 'react-icons';
import { MdContentCopy } from 'react-icons/md';
// import './ContactItem.css';

type Props = {
  label: string;
  color?: string;
  Icon: IconType;
  handleClick: () => void;
};

const ContactItem = ({ label, color, Icon, handleClick }: Props) => {
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (isCopied) {
      setTimeout(() => setIsCopied(false), 1000);
    }
  }, [isCopied]);
  
  return (
    <div className="flex flex-col w-40 items-center gap-2 cursor-pointer">
      <IconContext.Provider value={{ color }}>
        <Icon size="2em" onClick={handleClick} />
          <CopyToClipboard text={label} onCopy={() => setIsCopied((isCopied) => !isCopied)}>
            <div className="flex flex-row items-center gap-2">
              <MdContentCopy color="black" />
              <h3>{isCopied ? 'Copied!' : label}</h3>
            </div>
          </CopyToClipboard>
      </IconContext.Provider>
    </div>
  );
};

export default ContactItem;
