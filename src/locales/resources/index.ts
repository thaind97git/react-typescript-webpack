import { Resource } from 'i18next';
import languages from '../languages';
import home from './home.json';
import footer from './footer.json';

interface IResource {
  [key: string]: Resource;
}

const mergeResource: IResource = {
  home,
  footer,
};

export const langs = Object.keys(languages);

const resources: Resource = {};

Object.keys(languages).map(lang => {
  Object.keys(mergeResource).map(fileName => {
    resources[lang] = {
      translation: {
        ...(resources[lang]?.translation as object),
        [fileName]: mergeResource[fileName][lang],
      },
    };
  });
});

export default resources;
