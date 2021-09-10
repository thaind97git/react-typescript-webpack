import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { ILayout, selectDisplayLayout } from '@/store/slices/layoutSlice';

import Github from '@/static/images/icon/github.svg';
import { goURL } from '@/helpers/router';

interface IMenuItem {
  name: string;
  href: string;
  label: string;
}

export const HEADERS: Array<IMenuItem> = [
  // {
  //   name: '1',
  //   href: '#',
  //   label: 'Menu 1',
  // },
];

const Header: React.FC = () => {
  const layout: ILayout = useSelector(selectDisplayLayout);
  const [openMobile, setOpenMobile] = useState<boolean>();
  const [section, setSection] = useState(HEADERS[0]);

  if (!layout.header) {
    return null;
  }
  return (
    <>
      <header className="header fixed">
        <div className="logo-header">
          <div onClick={() => goURL('/')} className="box-img-flex">
            <img width={40} src="/static/images/webpack.png" alt="" />
            <h4>React-Typescript-Webpack</h4>
          </div>
        </div>
        <div className="menu">
          <ul>
            {HEADERS.map(item => (
              <li
                onClick={() => setSection(item)}
                key={item.name}
                className={section.name === item.name ? 'active' : ''}
              >
                <a href={item.href}>
                  <span>{item.label}</span>
                </a>
              </li>
            ))}
            <li>Version: {process.env.VERSION}</li>
            <li className="button-github">
              <a
                style={{ display: 'flex', alignItems: 'center' }}
                target="_blank"
                rel="noreferrer"
                href="https://github.com/thaind97git/react-typescript-webpack"
              >
                <span>&nbsp;</span> <Github style={{ height: 24 }} />
              </a>
            </li>
          </ul>
        </div>
        <a
          onClick={() => setOpenMobile(true)}
          className="btn-menu-mobile"
          href="#"
        >
          <span></span>
          <span></span>
          <span></span>
        </a>
      </header>

      <div className={`mobile-menu ${openMobile ? 'show' : ''}`}>
        <div className="m-menu__title">
          <a
            onClick={() => setOpenMobile(false)}
            href="#"
            className="m-menu-close"
          >
            +
          </a>
        </div>
        <ul>
          {HEADERS.map(item => (
            <li key={item.name}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className={`overlay-menu ${openMobile ? 'active' : ''}`}></div>
    </>
  );
};

export default Header;
