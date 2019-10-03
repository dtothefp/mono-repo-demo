"use strict";

module.exports = (api) => {
  api.cache.forever();

  return {
    extends: require.resolve(`@luna/babel-config/.babelrc`),
  };
};
