<div align="center">
<p>
<a href="https://github.com/thaind97git/react-typescript-webpack/issues" target="_blank" rel="noopener"><img src="https://img.shields.io/github/issues/thaind97git/react-typescript-webpack" data-origin="https://img.shields.io/github/issues/thaind97git/react-typescript-webpack" alt="Git issue"></a> 
<a href="https://github.com/thaind97git/react-typescript-webpack/network/members" target="_blank" rel="noopener"><img src="https://img.shields.io/github/forks/thaind97git/react-typescript-webpack" data-origin="https://img.shields.io/github/forks/thaind97git/react-typescript-webpack" alt="Git forks"></a> 
<a href="https://github.com/thaind97git/react-typescript-webpack/stargazers" target="_blank" rel="noopener"><img src="https://img.shields.io/github/stars/thaind97git/react-typescript-webpack" data-origin="https://img.shields.io/github/stars/thaind97git/react-typescript-webpack" alt="Git star"></a> 
<a href="https://github.com/thaind97git/react-typescript-webpack/blob/main/LICENSE" target="_blank" rel="noopener"><img src="https://img.shields.io/github/license/thaind97git/react-typescript-webpack" data-origin="https://img.shields.io/github/license/thaind97git/react-typescript-webpack" alt="Git MIT"></a> 
</p>
   <img src="https://raw.githubusercontent.com/thaind97git/react-typescript-webpack/main/public/static/images/banner.png"  alt="react typescript webpack starter"   />
</div>
<br  />

<div  align="center"><h4>Start your react typescript project with manual webpack config in seconds</h4></div>
<div  align="center">Flexible to control webpack, easy to deploy</div>
<div align="center"><sub><i>Keywords: React Starter, Webpack, Typescript, React.js, Redux, Babel, jest, react-router, sass, redux-thunk, pm2</i></sub></div>

# Overview

- React-Typescript-Webpack was config with React, Typescript and Webpack without CRA. Faster to start your next react project.

# Quick Start

## For development

1. Clone this repo to your local machine using:

   ```shell
   git clone git@github.com:thaind97git/react-typescript-webpack.git
   ```

2. Change the current working directory to the project:

   ```shell
   cd react-typescript-webpack
   ```

3. Install dependencies:

   ```shell
   [ yarn or npm install ]
   ```

4. At this point you can run `npm run dev` or `yarn dev` to run project with development mode

   _Now, your browser will auto open at `http://127.0.0.1:3000`_

## For production

1. Run command to build:

   ```shell
   [ yarn or npm run ] build
   ```

2. Setup env for production mode by create new file `.env`

3. Run project at build directory
   - Using pm2: `[ yarn or npm run ] start-pm2`
   - Run with terminal: `[ yarn or npm run ] start`

# Features

- [x] React hook
- [x] Webpack 5
- [x] Typescript
- [x] Sass
- [x] Redux-thunk
- [ ] Redux-saga
- [x] Jest
- [x] Axios
- [x] I18n
- [x] React-router
- [x] Alias
- [x] Hot reload
- [x] Eslint
- [x] Prettier and Husky

# How to using

## Router

- Create new feature at `src/features/<feature-name/>`
- Create a `route.ts` inside `src/features/<feature-name/>` and export default an array match with rules:

  ```js
  import { lazy } from 'react';
  const Component = lazy(() => import('./path-to-component'));

  export default [
    {
      /*
       * name of a route
       * using to apply key react when generate routes
       * required for declare
       */
      name: 'name',
      /*
       * path of route
       */
      path: '/path-name',
      /*
       * using as exact in react-router
       */
      exact: true,
      /*
       * dynamic render layout for each route
       * header: false -> route will auto hide header
       * if this rendered, don't need to declare
       * control this inside `src/store/slices/layoutSlice` with more section
       */
      layout: {
        header: false,
        footer: false,
      },
      /*
       * component rendered inside route
       */
      component: Component,
    },
  ];
  ```

  _- You don't need do anything else after create and modify `route.ts` because i'm using [import-glob](https://www.npmjs.com/package/import-glob) to auto import (check at `webpack/webpack.common.js` for plugin, `src/router/index.ts` and `src/layouts/main/index.tsx` for using)._

  _- ~~If you don't want to use auto import or <b>using project with jest</b>, just using the code that i'm commented. Because i'm not yet support auto import for jest.~~_

  _- Now, I'm supported auto import route for jest (check at `config/jest/routeMock.js)`_

## Write new component

- Create new folder at `src/components/<component-name/>`
- Create an `index.tsx` and `<any-name>.scss`

  _- <b>Don't need</b> import `scss` into component, It will already merged into App.scss after you restart server._

  _- This is a feature by using [import-glob](https://www.npmjs.com/package/import-glob) (check at `webpack/webpack.common.js` for plugin and `src/styles/App.scss` for using)_

  _- You should use [BEM](http://getbem.com/) to write css without conflict_

## Using i18n

- Create new json file at `src/locales/resources/<file-name/>.json`
- Add content follow this format into json file
  ```js
  {
    "en": {
      "name": "Name"
    },
    "vi": {
      "name": "Tên"
    }
  }
  ```
- update `src/locales/resources/index.ts` like this:

  ```js
  /*
   * you can use other name instead `user`
   * this name will be used as path to key
  */
  import user from './<file-name/>.json

  const mergeResource: IResource = {
    ..., // others json
    user
  };
  ```

- Now inside any where, you can access to key like this:

  ```js
    const { t } = useTranslation()

    t('user.name') will be render "Name" for `en` and "Tên" for `vi`
  ```

## Call API with axios

```js
import { getUser } from '@/apis/user.ts';
import { setLoading } from '@/store/slices/appSlice';
import { errorHandler } from '@/helpers/axios';

const dispatch = useDispatch();

// Use useCallback to memorize create func (just one time)
const fetchUser = useCallback(async () => {
  try {
    // Star loading spinner
    dispatch(setLoading(true));

    // fetch user
    const resp = await getUser();
    console.log(resp);
  } catch (error) {
    // display toast when error
    errorHandler(error);
  } finally {
    // End loading spinner
    dispatch(setLoading(false));
  }
}, []);

useEffect(() => {
  // Trigger function
  fetchUser();
}, [fetchUser]);
```

## How to use Auth feature

- If you want to build an admin page, with authorize full layout, just go to line **50** at `src/layouts/main/index.tsx` and use the code inside comment.
- **Auth** component is a feature help authorize page by fetching profile each time page rendered.
- You must have a server API to use this feature. This API with simple function like receive a header token, return user profile if token is valid and return 404 if token is expired.

# Tips

- Go to `config/@types/[any-file-name].d.ts` to declare global type of typescript
- Go to `pm2/prod.json` and change <b>"name: ~~react-webpack-typescript-starter~~ ->[other-name]"</b> to config pm2 app name
- Go to `components/spinner/index.tsx` and modify jsx + css to use another loading

# Carefully

!> **Don't create folder with the `PascalCase`. Because it will throw error when build prod at ubuntu. I will fix it later or happy if you have a PR to fix it.**

```shell
Module not found: Error: Can't resolve '@/path-to-pascal-case' in '/path-to-lower-case'
```

# Other References

- Webpack Plugins
  - [ts-loader](https://github.com/TypeStrong/ts-loader)
  - [import-glob](https://www.npmjs.com/package/import-glob)
  - [eslint-loader](https://www.npmjs.com/package/eslint-loader)
  - [babel-loader](https://github.com/babel/babel-loader)
  - [svg-loader](https://github.com/gregberge/svgr)
  - [sass](https://www.npmjs.com/package/sass), [sass-loader](https://www.npmjs.com/package/sass-loader)
  - [html-loader](https://www.npmjs.com/package/html-loader)
  - [alias](https://webpack.js.org/configuration/resolve/)
  - [webpack-manifest-plugin](https://www.npmjs.com/package/webpack-manifest-plugin)
  - ...
- [React-scripts CRA](https://github.com/facebook/create-react-app/tree/master/packages/react-scripts/config)
- [Husky](https://typicode.github.io/husky/#/)
- [Lint-Staged](https://github.com/okonet/lint-staged)

---

# License

MIT
