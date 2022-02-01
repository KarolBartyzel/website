export type EducationType = {
  date: [string, string];
  title: string;
  university: {
    name: string;
    icon: string;
  };
};

export const educations: Array<EducationType> = [
  {
    date: ['2015-10-01', '2019-02-28'],
    title: 'Bachelor of Engineering in Computer Science',
    university: {
      name: 'AGH UST, Krakow',
      icon: '/Images/agh.jpg',
    },
  },
  {
    date: ['2019-03-01', '2020-07-16'],
    title: 'Master of Science in Computer Science',
    university: {
      name: 'AGH UST, Krakow',
      icon: '/Images/agh.jpg',
    },
  },
];
