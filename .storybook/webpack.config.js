const wixStorybookConfig = require('yoshi/config/webpack.config.storybook');

module.exports = (config, env, defaultConfig) => {
  const newConfig = wixStorybookConfig(defaultConfig);

  newConfig.module.rules.push({
    test: /\.story\.[j|t]sx?$/,
    loader: 'wix-storybook-utils/loader',
    options: {
      storyConfig: {
        moduleName: 'wix-ui-backoffice',
        repoBaseURL: 'https://github.com/wix/wix-ui-backoffice/tree/master/src/components/',
        importFormat: "import {%componentName} from '%moduleName/%componentName'"
      }
    }
  });

  return newConfig;
};
