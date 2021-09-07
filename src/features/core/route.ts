import { lazy } from 'react';

const Login = lazy(() => import('./components/login/index'));

export default [
  {
    name: 'login',
    path: '/login',
    exact: true,
    layout: {
      header: false,
      footer: false,
    },
    component: Login,
  },
];
