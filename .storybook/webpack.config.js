const wixStorybookConfig = require('yoshi/config/webpack.config.storybook');
const { StylableWebpackPlugin } = require("@Stylable/webpack-plugin");

module.exports = (config, env, defaultConfig) => {
  const newConfig = wixStorybookConfig(defaultConfig);
  // Filter out yoshi's stylable plugin
  newConfig.plugins = newConfig.plugins.filter(plugin => {
    return plugin.constructor.name !== 'StylableWebpackPlugin';
  });

  const stylableWebpackPlugin = new StylableWebpackPlugin({
    filename: '[name].stylable.bundle.css',
    optimize: { classNameOptimizations: false, shortNamespaces: false, removeUnusedComponents: false },
    generate: {
      runtimeStylesheetId: 'namespace',
    },
    legacyRuntime: true,
    unsafeBuildNamespace: true,
  });

  newConfig.plugins.push(stylableWebpackPlugin);

  newConfig.module.rules.push({
    test: /\.story\.[j|t]sx?$/,
    loader: 'wix-storybook-utils/loader',
    options: {
      storyConfig: {
        moduleName: 'wix-ui-backoffice',
        repoBaseURL: 'https://github.com/wix/wix-ui-backoffice/tree/master/src/components/',
        importFormat: "import {%componentName} from '%moduleName/%componentName'",
      },
    },
  });

  return newConfig;
};
