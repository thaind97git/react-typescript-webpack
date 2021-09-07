import NotFound from '@/components/not-found';
import RouteModules from '../features/**/route.ts';
// import CoreRoute from '@/features/core/route';
// import HomeRoute from '@/features/home/route';

/**
 * Use this for without jest
 * Jest don't recognize import glob
 */
const appRoutes = RouteModules.reduce((prev: Array<object>, module: any) => {
  prev.push(...module.default);
  return prev;
}, []);

// const appRoutes = [...CoreRoute, ...HomeRoute];

export default [
  ...appRoutes,
  {
    path: '*',
    layout: {
      header: false,
      footer: false,
    },
    component: NotFound,
  },
];
