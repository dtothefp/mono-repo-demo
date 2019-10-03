import path from 'path';
import aliasDevPackages from '@luna/scripts/alias-lerna-packages';

export default {
  isomorphic: {
    cwd: `src`,
    bootstrap: `bootstrap.js`,
    routes: `routes/index.js`,
  },
  webpackCb(config) {
    const {NODE_ENV, BUILD_ENV} = process.env;

    if (NODE_ENV === `development` || BUILD_ENV === `debug`) {
      // const alias = aliasDevPackages({
        // cwd: path.resolve(__dirname, `..`, `..`),
      // });

      // config.resolve = config.resolve || {};
      // config.resolve.alias = config.resolve.alias || {};

      // Object.assign(config.resolve.alias, alias);
    }

    return config;
  },
};
