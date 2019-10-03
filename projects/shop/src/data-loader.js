/* eslint no-console:0 */

/**
 * Mock data loader to be passed to the dataLoaderMiddleware
 *
 * @param {Function} dispatch from redux
 * @param {Function} getState from redux
 * @param {Object} route matched route
 */
export default async (dispatch, getState, {
  loadedData,
  routeData,
  contentfulData,
}) => {
  const {NODE_ENV} = process.env;

  if (NODE_ENV === `development`) {
    const {match} = routeData;

    console.log(`***ROUTE DATA***`, match);
    console.log(`***LOADED DATA***`, loadedData);
    console.log(`***CONTENTFUL DATA***`, contentfulData);
  }
};
