import React from 'react';
import { ITag } from './types';
import HomeTag from './components/tag';
import Banner from '@/static/images/banner.png';

const keywords: Array<ITag> = [
  { label: 'React.js' },
  { color: '#84c6e8', label: 'Webpack 5' },
  { color: '#764abc', label: 'Redux' },
  { color: '#f5da55', label: 'Babel' },
  { color: '#15c213', label: 'jest' },
  { color: '#e94949', label: 'react-router' },
  { color: '#bf4080', label: 'sass' },
  { color: '#764abc', label: 'redux-thunk' },

  { color: '#2b037a', label: 'pm2' },
];

const Home: React.FC = () => {
  return (
    <div className="row home">
      <div className="container">
        <img className="banner" src={Banner} />
        <div className="title">
          React-Typescript-Webpack was config with React, Typescript and Webpack
          without CRA. Faster to start your next react project.
        </div>
        <div>
          <div className="keywords">
            <i>
              Keywords:
              {keywords.map(key => (
                <HomeTag color={key.color} label={key.label} key={key.label} />
              ))}
            </i>
          </div>
        </div>
        <div className="aldenn">
          Created with by 👻 <a href="http://aldenn.vercel.app/">Aldenn</a>
        </div>
      </div>
    </div>
  );
};

export default Home;
