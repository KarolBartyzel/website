import React from 'react';
import { FaLinkedin, FaEnvelope, FaGithubSquare } from 'react-icons/fa';

import ContactItem from './ContactItem';
import { EMAIL, GITHUB_PROFILE, LINKED_IN_PROFILE } from './Contact.model';
import './Contact.css';

const Contact: PageType = () => {
  const onLinkedinClick = () => {
    window.open(`https://www.linkedin.com/in/${LINKED_IN_PROFILE}/`);
  };

  const onGithubClick = () => {
    window.open(`https://github.com/${GITHUB_PROFILE}/`);
  };

  const onEmailClick = () => {
    window.location.href = `mailto:${EMAIL}`;
  };

  return (
    <div className="contact">
      <h1 className="contact-title">Contact</h1>
      <div className="contact-content">
        <ContactItem
          label={LINKED_IN_PROFILE}
          color="#2867b2"
          Icon={FaLinkedin}
          handleClick={onLinkedinClick}
        />
        <ContactItem
          label={EMAIL}
          color="#D44638"
          Icon={FaEnvelope}
          handleClick={onEmailClick}
        />
        <ContactItem
          label={GITHUB_PROFILE}
          Icon={FaGithubSquare}
          handleClick={onGithubClick}
        />
      </div>
    </div>
  );
};

export default Contact;
