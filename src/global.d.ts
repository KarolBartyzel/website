type PageType = (any) => JSX.Element;

type ExperienceType = {
  date: [string, string],
  title: string,
  company: string,
  icon: string,
  product: string,
  responsibilities: Array<string>,
  technologies: Array<string>,
};

type EducationType = {
  date: [string, string],
  title: string,
  icon: string,
  university: string,
  field: string,
};

type PostType = {
  title: string,
  summary: string,
  text: string,
  image: string,
};

declare module 'list-react-files';