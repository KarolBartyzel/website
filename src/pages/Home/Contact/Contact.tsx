import React from 'react';
import { FaLinkedin, FaEnvelope, FaGithubSquare } from 'react-icons/fa';

import ContactItem from './ContactItem';
import { Loader } from '../../../components';
import { ContactModel } from './Contact.model';

interface IContactProps {
  contact: ContactModel;
}

const Contact: PageComponentModel = ({ contact }: IContactProps) => {
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
    <div className="rounded-md flex flex-col gap-8 justify-center items-center p-6 bg-slate-100">
      <h1 className="text-2xl font-bold font-mono text-center">Contact</h1>
      {contact ? (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 w-full">
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
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );

  return (
    <div className="contact">
      <h1 className="contact-title">Contact</h1>
      <div className="contact-content"></div>
    </div>
  );
};

export default Contact;
