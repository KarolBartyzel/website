import React from 'react';

import Page from '../../components/Page';

import Photo from './Photo';
import Education from './Education';
import Experience from './Experience';
import Contact from './Contact';

const Home = () => (
  <Page>
    <Photo />
    <Experience />
    <Education />
    <Contact />
  </Page>
);

export default Home;
