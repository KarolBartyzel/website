export type ProjectModel = {
  name: string;
  description: string;
  technologies: string[];
  repoUrl: string;
  demoUrl: string;
};

export const projects = [
  {
    name: 'React',
    description: `Sth about React is a very long description that can take pages. Sth more about React is a very long
      description that can take pages.`,
    technologies: ['React', 'Typescript'],
    repoUrl: 'https://github.com/facebook/react',
    demoUrl: 'https://pl.reactjs.org/',
  },
  {
    name: 'React Native',
    description: 'Sth about React Native',
    technologies: ['React', 'React Native', 'Typescript'],
    repoUrl: 'https://github.com/facebook/react-native',
    demoUrl: 'https://reactnative.dev/',
  },
];
