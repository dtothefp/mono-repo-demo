import React from 'react';
import { ConnectedRouter } from 'react-router-redux';
import { renderRoutes } from 'react-router-config';
import { hot } from 'react-hot-loader/root';
import { LoadRouteData } from '@luna/modules';
import routes from '../../routes';

const Router = ({history}) => (
  <ConnectedRouter history={history}>
    <LoadRouteData routes={routes}>
      {renderRoutes(routes)}
    </LoadRouteData>
  </ConnectedRouter>
);

export default hot(Router);
