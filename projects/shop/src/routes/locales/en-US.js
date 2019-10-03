/* eslint new-cap:0 */
import App from '../../components/App/App';
import Home from '../../components/Home';

export default {
  component: App,
  locale: `en-US`,
  path: `/`,
  routes: [
    Home(`/`),
  ],
};
