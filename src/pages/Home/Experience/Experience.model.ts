export type ExperienceModel = {
  date: [string, string];
  role: string;
  company: {
    icon: string;
    name: string;
  };
  agency?: {
    icon: string;
    name: string;
  };
};

export const experiences: Array<ExperienceModel> = [
  {
    date: ['2017-07-01', '2017-09-30'],
    role: 'Full Stack Developer Intern',
    company: {
      icon: '/Images/medius.jpg',
      name: 'Medius Poland',
    },
  },
  {
    date: ['2017-10-01', '2018-08-30'],
    role: 'Junior Full Stack Developer',
    company: {
      icon: '/Images/medius.jpg',
      name: 'Medius Poland',
    },
  },
  {
    date: ['2018-09-01', '2020-11-30'],
    role: 'Regular React Developer',
    company: {
      icon: '/Images/eset.jpg',
      name: 'ESET Poland',
    },
  },
  {
    date: ['2020-12-01', 'Present'],
    role: 'Senior React Developer',
    company: {
      icon: '/Images/pwc.jpg',
      name: 'PwC Poland',
    },
    agency: {
      icon: '/Images/in-team.svg',
      name: 'IN Team',
    },
  },
];
