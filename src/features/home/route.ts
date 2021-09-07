import { lazy } from 'react';

const Home = lazy(() => import('./index'));

export default [
  {
    name: 'home',
    path: '/',
    exact: true,
    layout: {
      header: true,
      footer: true,
    },
    component: Home,
  },
];
