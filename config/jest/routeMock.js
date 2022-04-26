const fs = require('fs');
const path = require('../paths');

const { appSrc } = path;
const featuresDir = `${appSrc}/features`;

const routeFileName = 'route.ts';

const RouteModules = [];
function readFolder(dir) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const filePath = `${dir}/${file}`;
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      readFolder(filePath);
    } else {
      if (file === routeFileName) {
        const route = require(filePath);
        RouteModules.push(route);
      }
    }
  });
}

readFolder(featuresDir);

const appRoutes = RouteModules.reduce((prev, module) => {
  prev.push(...module.default);
  return prev;
}, []);

module.exports = appRoutes;
