# wix-ui-backoffice

The wix-ui-backoffice (WUB) library is the themed version of wix-style-react (WSR) and is used for the business manager and premium areas of Wix.
WUB will eventually replace WSR, but in the meantime, WSR will act as a proxy layer for each new component that is added to WUB. This way we can gradually migrate its components.

> Storybook: [here](https://wix-wix-ui-backoffice.surge.sh/)

> Uses: [yoshi](https://github.com/wix-playground/yoshi) for build

# Testing

* Running `npm run test` will run both unit and e2e tests.

## Unit tests (jest/jsdom)

* If you want to run only unit tests, use `npm run test:unit`.
* You can use `npm run test:watch` to watch for file changes, or selectivly run specific tests.

## Browser(e2e) tests (protractor)

* If you want to run only e2e tests, use `npm run test:e2e`
  * NOTE: You should run `npm test` or `npm pretest` before that, so that `build-storybook` would run, and we'll have the storybook statics under the `dist` folder. When you run `npm run test:e2e` it starts a statics server which serves the content of the `storybook_static` folder.
