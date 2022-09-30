import { initializeApp } from 'firebase/app';
import { getFirestore, getDocs, collection } from 'firebase/firestore';
import { useCallback, useEffect, useState } from 'react';
import { BlogModel } from '../../pages/Blog/Blog.model';
import { ContactModel } from '../../pages/Home/Contact/Contact.model';
import { EducationModel } from '../../pages/Home/Education/Education.model';
import { ExperienceModel } from '../../pages/Home/Experience/Experience.model';

const firebaseConfig = {
  apiKey: 'AIzaSyAeOPYt56D1TG1sRvMgwabhZdRn0NGTAiA',
  authDomain: 'karol-bartyzel-website.firebaseapp.com',
  projectId: 'karol-bartyzel-website',
  storageBucket: 'karol-bartyzel-website.appspot.com',
  messagingSenderId: '1026194432528',
  appId: '1:1026194432528:web:50d3542f603208dba22095',
  measurementId: 'G-W8GM6QH6FL',
};

const firebase = initializeApp(firebaseConfig);
const db = getFirestore(firebase);

const useHome = () => {
  const [experiences, setExperiences] = useState<ExperienceModel[] | null>(
    null
  );
  const [educations, setEducations] = useState<EducationModel[] | null>(null);
  const [contact, setContact] = useState<ContactModel | null>(null);

  const getExperiences = useCallback(async () => {
    const querySnapshot = await getDocs(collection(db, 'experiences'));
    const experiences = querySnapshot.docs.map(doc =>
      doc.data()
    ) as ExperienceModel[];
    return experiences.sort((experience1, experience2) =>
      experience1.startDate < experience2.startDate ? 1 : -1
    );
  }, []);

  const getEducations = useCallback(async () => {
    const querySnapshot = await getDocs(collection(db, 'educations'));
    const educations = querySnapshot.docs.map(doc =>
      doc.data()
    ) as EducationModel[];
    return educations.sort((education1, education2) =>
      education1.startDate < education2.startDate ? 1 : -1
    );
  }, []);

  const getContact = useCallback(async () => {
    const querySnapshot = await getDocs(collection(db, 'others'));
    const [contact] = querySnapshot.docs.map(doc => doc.data());
    return contact as ContactModel;
  }, []);

  useEffect(() => {
    getExperiences().then(experiences => setExperiences(experiences));
    getEducations().then(educations => setEducations(educations));
    getContact().then(contact => setContact(contact));
  }, [getContact, getEducations, getExperiences]);

  return { experiences, educations, contact };
};

const useBlog = () => {
  const [blogs, setBlogs] = useState<BlogModel[] | null>(null);

  const getBlogs = useCallback(async () => {
    const querySnapshot = await getDocs(collection(db, 'blogs'));
    const blogs = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    })) as BlogModel[];
    return blogs.sort((blog1, blog2) =>
      blog1.publishedDate < blog2.publishedDate ? 1 : -1
    );
  }, []);

  useEffect(() => {
    getBlogs().then(blogs => setBlogs(blogs));
  }, [getBlogs]);

  return { blogs };
};

export { useHome, useBlog };
