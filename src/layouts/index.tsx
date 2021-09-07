import React, { Fragment } from 'react';

import Header from './Header';

import Footer from './Footer';
import Main from './Main';

const Layout: React.FC = () => {
  return (
    <Fragment>
      <Header />
      <Main />
      <Footer />
    </Fragment>
  );
};

export default Layout;
