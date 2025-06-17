import React from 'react';
import { Home } from '../src/pages';
import { getDocs, collection } from 'firebase/firestore';
import { GetStaticProps } from 'next';
import { db } from '../src/hooks';
import { ContactModel } from '../src/pages/Home/Contact/Contact.model';
import { EducationModel } from '../src/pages/Home/Education/Education.model';
import { ExperienceModel } from '../src/pages/Home/Experience/Experience.model';
import { IHomeProps } from '../src/pages/Home';
import { InformationModel } from '../src/pages/Home/AboutMe/AboutMe.model';

const HomePage = ({ experiences, educations, contact, informations }: IHomeProps) => {
  return (
    <Home experiences={experiences} educations={educations} contact={contact} informations={informations} />
  );
};

export const getStaticProps: GetStaticProps<IHomeProps> = async () => {
  const experiences = await (async () => {
    const querySnapshot = await getDocs(collection(db, 'experiences'));
    const experiences = querySnapshot.docs.map(doc =>
      doc.data()
    ) as ExperienceModel[];
    console.log('lala lele', experiences);
    return experiences.sort((experience1, experience2) =>
      experience1.startDate < experience2.startDate ? 1 : -1
    );
  })();

  const educations = await (async () => {
    const querySnapshot = await getDocs(collection(db, 'educations'));
    const educations = querySnapshot.docs.map(doc =>
      doc.data()
    ) as EducationModel[];
    return educations.sort((education1, education2) =>
      education1.startDate < education2.startDate ? 1 : -1
    );
  })();

  const contact = await (async () => {
    const querySnapshot = await getDocs(collection(db, 'others'));
    const [contact] = querySnapshot.docs.map(doc => doc.data());
    return contact as ContactModel;
  })();

  const informations = await (async () => {
    const querySnapshot = await getDocs(collection(db, 'informations'));
    const informations = querySnapshot.docs.map(doc => doc.data());
    return informations as InformationModel[];
  })();

  console.log(experiences, educations, contact, informations);

  return {
    props: { experiences, educations, contact, informations },
  };
};

export default HomePage;
