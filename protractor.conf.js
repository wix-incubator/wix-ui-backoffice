/* global jasmine */
const {baseProtractorConfig} = require('wix-ui-test-utils/protractor');

jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
exports.config = baseProtractorConfig;
