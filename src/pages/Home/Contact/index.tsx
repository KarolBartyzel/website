import React from 'react';
import {IconContext} from 'react-icons';
import {FaLinkedin, FaEnvelope, FaGithubSquare} from 'react-icons/fa';

import './index.css';

const Contact: PageType = function Contact() {
  const linkedinProfile = 'kbartyzel';
  const githubProfile = 'KarolBartyzel';
  const email = 'karolbartyzel308@gmail.com';

  function onLinkedinClick() {
    window.open(`https://www.linkedin.com/in/${linkedinProfile}/`);
  }

  function onGithubClick() {
    window.open(`https://github.com/${githubProfile}/`);
  }

  function onEmailClick() {
    window.location.href = `mailto:${email}`;
  }

  return (
    <div className="contact">
      <h1 className="contact-title">Contact</h1>
      <div className="contact-content">
        <div className="contact-element">
        <IconContext.Provider
          value={{ color: '#2867b2' }}
        >
          <FaLinkedin size="2em" className="contact-element-icon" onClick={onLinkedinClick} />
          <caption className="contact-element-caption">{linkedinProfile}</caption>
        </IconContext.Provider>
        </div>
        <div className="contact-element">
        <IconContext.Provider
          value={{}}
        >
          <FaGithubSquare size="2em" className="contact-icon" onClick={onGithubClick} />
          <caption className="contact-element-caption">{githubProfile}</caption>
        </IconContext.Provider>
        </div>
        <div className="contact-element">
        <IconContext.Provider
          value={{ color: '#d44638' }}
        >
          <FaEnvelope size="2em" className="contact-icon" onClick={onEmailClick} />
          <caption className="contact-element-caption">{email}</caption>
        </IconContext.Provider>
        </div>
      </div>
    </div>
  );
}

export default Contact;
