/* eslint no-inline-comments:0,no-console:0 */
import loadable from 'react-loadable';
import localeData from './locale-data';
import { route } from '@luna/modules';

const component = loadable({
  loader: () => import(/* webpackChunkName: "HomeComponent" */ `./Home`),
  loading: () => null,
});
const loadData = ({routeData}) => {
  const {route} = routeData;

  console.log(`Call Load Data HomeComponent ${route.path}`);

  return Promise.resolve({type: `home component`});
};

export default route({
  component,
  loadData,
  // do something async
  transformLocaleData({locale}) {
    return Promise.resolve(localeData[locale]);
  },
});
