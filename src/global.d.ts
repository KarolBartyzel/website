type PageType = (any) => JSX.Element;

type PostType = {
  title: string,
  summary: string,
  text: string,
  image: string,
};

declare module 'list-react-files';
