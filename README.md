# wix-ui-backoffice

The wix-ui-backoffice (WUB) library is the themed version of wix-style-react (WSR) and is used for the business manager and premium areas of Wix.
WUB will eventually replace WSR, but in the meantime, WSR will act as a proxy layer for each new component that is added to WUB. This way we can gradually migrate its components.

> Storybook: [here](https://wix.github.io/wix-ui-backoffice)

> Uses: [yoshi](https://github.com/wix-playground/yoshi) for build

# Testing
## Browser tests (e2e)
You can use the script `npm run test:e2e` to run the browser tests only.

NOTE: You should run `npm test` or `npm pretest` before that, so that `build-storybook` would run, and we'll have the storybook statics under the `dist` folder.