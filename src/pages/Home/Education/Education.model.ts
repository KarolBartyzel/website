export type EducationModel = {
  date: [string, string];
  title: string;
  field: string;
  university: {
    name: string;
    icon: string;
  };
};

export const educations: Array<EducationModel> = [
  {
    date: ['2015-10-01', '2019-02-28'],
    title: 'Bachelor of Engineering',
    field: 'Computer Science',
    university: {
      name: 'AGH UST, Krakow',
      icon: '/Images/agh.jpg',
    },
  },
  {
    date: ['2019-03-01', '2020-07-16'],
    title: 'Master of Science',
    field: 'Computer Science',
    university: {
      name: 'AGH UST, Krakow',
      icon: '/Images/agh.jpg',
    },
  },
];
