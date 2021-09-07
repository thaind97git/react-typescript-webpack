import React, { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { history } from '@/store';
import { ConnectedRouter } from 'connected-react-router';
import { ToastContainer } from 'react-toastify';
import { Helmet } from 'react-helmet-async';

import Layout from '@/layouts';
import PageLoading from '@/components/page-loading';

// multi language
import '@/locales/i18n';

// load app SCSS styles
import '@/styles/App.scss';

// load Toast styles
import 'react-toastify/dist/ReactToastify.css';

const ReactApp: React.FC = () => {
  return (
    <Router>
      <Helmet titleTemplate="%s - React Starter" defaultTitle="React Starter">
        <meta name="description" content="A React Starter application" />
      </Helmet>

      <ConnectedRouter history={history}>
        <Suspense fallback={<PageLoading show />}>
          <Layout />
          <PageLoading />
        </Suspense>
      </ConnectedRouter>

      <ToastContainer />
    </Router>
  );
};

export default ReactApp;
