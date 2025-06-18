import React from 'react';

import Photo from './Photo';
import Education from './Education';
import Experience from './Experience';
import Contact from './Contact';
import { AboutMe } from './AboutMe';
import { ExperienceModel } from './Experience/Experience.model';
import { EducationModel } from './Education/Education.model';
import { ContactModel } from './Contact/Contact.model';
import { InformationModel } from './AboutMe/AboutMe.model';
import { Portfolio } from './Portfolio';
import { ProjectModel } from './Portfolio/Portfolio.model';

export interface IHomeProps {
  informations: InformationModel[];
  experiences: ExperienceModel[];
  educations: EducationModel[];
  contact: ContactModel;
  projects: ProjectModel[];
}

const Home = ({ informations, experiences, educations, contact, projects }: IHomeProps) => (
  <div className="max-w-6xl w-full px-6 py-4 flex flex-col gap-6">
    <Photo />
    <AboutMe informations={informations} />
    <Experience experiences={experiences} />
    <Education educations={educations} />
    <Contact contact={contact} />
    <Portfolio projects={projects} />
  </div>
);

export default Home;
