import { routerMiddleware } from 'react-router-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
// Local dependencies
import * as actions from 'actions';
import rootReducer from 'reducers';
import rootSaga from 'sagas';

import datLoader from './data-loader';
import { dataLoaderMiddleware } from '@luna/modules';

/**
 * Redux bootstrap function shared between "client" and "server"
 * @param {String} env the server or client environment
 * @param {String} route only supplied on the server
 * @return {Promise|Object} store and history
 */
export default function({env, route, locale, history}) { // eslint-disable-line
  const isServer = env === `server`;
  const sagaMiddleware = createSagaMiddleware();
  const isDev = process.env.NODE_ENV !== `production` &&
    typeof window === `object` &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
    !isServer;
  let composeEnhancers = compose;

  if (isDev) {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({});
  }

  const store = createStore(
    rootReducer,
    window.__STORE__ || {},
    composeEnhancers(applyMiddleware(
      sagaMiddleware,
      routerMiddleware(history),
      dataLoaderMiddleware(datLoader)
    ))
  );

  if (isServer) {
    store.dispatch(actions.init);
  } else {
    sagaMiddleware.run(rootSaga);

    if (module && module.hot) {
      // Enable Webpack hot module replacement for reducers
      module.hot.accept(`./reducers`, () => {
        const nextRootReducer = require(`./reducers/index`);
        store.replaceReducer(nextRootReducer.default || nextRootReducer);
      });
    }
  }

  return {store};
}
