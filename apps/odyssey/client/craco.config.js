const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');
module.exports = {
  webpack: {
    configure: (config) => {
      // Remove guard against importing modules outside of \`src\`.
      // Needed for workspace projects.
      config.resolve.plugins = config.resolve.plugins.filter(
        (plugin) => !(plugin instanceof ModuleScopePlugin)
      );

      // Replace include option for babel loader with exclude
      // so babel will handle workspace projects as well.
      config.module.rules[1].oneOf.forEach((r) => {
        if (r.loader && r.loader.indexOf('babel') !== -1) {
          r.exclude = /node_modules/;
          delete r.include;
        }
      });

      return config;
    },
  },
  jest: {
    configure: (config) => {
      config.resolver = '@nrwl/jest/plugins/resolver';
      return config;
    },
  },
};
