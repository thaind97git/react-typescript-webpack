import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import routes from '@/router';
import { compareTwoObject } from '@/utils';
import {
  ILayout,
  selectDisplayLayout,
  setDisplayLayout,
} from '@/store/slices/layoutSlice';
import { useShallowEqualSelector } from '@/hooks/useShallowEqualSelector';

const Main: React.FC = () => {
  const layout: ILayout = useShallowEqualSelector(selectDisplayLayout);
  const dispatch = useDispatch();

  const updateDisplayLayout = (currentLayout: ILayout, layout: ILayout) => {
    const layoutUpdated = currentLayout
      ? { header: !!currentLayout.header, footer: !!currentLayout.footer }
      : { header: true, footer: true };

    if (!compareTwoObject(layoutUpdated, layout)) {
      setTimeout(() => dispatch(setDisplayLayout(layoutUpdated)));
    }
  };

  return (
    <div id="main">
      <Switch>
        {routes.map(
          ({
            component: Component,
            path,
            layout: currentLayout,
            ...rest
          }: {
            component: any;
            path: string;
            layout: object;
          }) => {
            return (
              <Route
                key={path}
                path={path}
                render={props => {
                  updateDisplayLayout(currentLayout, layout);
                  /**
                   * Use this code for authorization like admin page
                   */
                  // return (
                  //   <Auth>
                  //     <Component {...props} />
                  //   </Auth>
                  // );
                  return <Component {...props} />;
                }}
                {...rest}
              />
            );
          },
        )}
      </Switch>
    </div>
  );
};

export default Main;
