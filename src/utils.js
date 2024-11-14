export const getImageUrl = (path) => {
  const base = import.meta.env.DEV ? '' : '/khoi-react-portfolio/';
  return `${base}assets/${path}`;
};
