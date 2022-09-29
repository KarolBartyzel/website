import React from 'react';
import { FaLinkedin, FaEnvelope, FaGithubSquare } from 'react-icons/fa';

import ContactItem from './ContactItem';
import './Contact.css';
import { useHome } from '../../../hooks';
import { Loader } from '../../../components';

const Contact: PageComponentModel = () => {
  const { contact } = useHome();

  const onLinkedinClick = () => {
    window.open(`https://www.linkedin.com/in/${contact?.linkedin}/`);
  };

  const onGithubClick = () => {
    window.open(`https://github.com/${contact?.github}/`);
  };

  const onEmailClick = () => {
    window.location.href = `mailto:${contact?.email}`;
  };

  return (
    <div className="contact">
      <h1 className="contact-title">Contact</h1>
      <div className="contact-content">
        {contact ? (
          <>
            <ContactItem
              label={contact.linkedin}
              color="#2867b2"
              Icon={FaLinkedin}
              handleClick={onLinkedinClick}
            />
            <ContactItem
              label={contact.email}
              color="#D44638"
              Icon={FaEnvelope}
              handleClick={onEmailClick}
            />
            <ContactItem
              label={contact.github}
              Icon={FaGithubSquare}
              handleClick={onGithubClick}
            />
          </>
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default Contact;
