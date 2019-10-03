import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import loadable from 'react-loadable';
import Router from './components/Router/Router';
import bootstrap from './bootstrap';

const history = createBrowserHistory();
const {store} = bootstrap({env: `client`, history});
const rootEl = document.querySelector(`.app`);

export default () => {
  loadable.preloadReady().then(() => {
    ReactDOM.hydrate(
      <Provider store={store}>
        <Router
          history={history}
        />
      </Provider>,
      rootEl
    );
  });
};
