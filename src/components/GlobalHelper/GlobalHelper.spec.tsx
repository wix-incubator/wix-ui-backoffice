import * as React from 'react';
import {globalHelperDriverFactory} from './GlobalHelper.driver';
import {GlobalHelper} from '.';
import {createDriverFactory} from 'wix-ui-test-utils/driver-factory';
import {isTestkitExists} from 'wix-ui-test-utils/vanilla';
import {isEnzymeTestkitExists} from 'wix-ui-test-utils/enzyme';
import {globalHelperTestkitFactory} from '../../testkit';
import {globalHelperTestkitFactory as enzymeGlobalHelperTestkitFactory} from '../../testkit/enzyme';
import {mount} from 'enzyme';

describe('GlobalHelper', () => {
  const createDriver = createDriverFactory(globalHelperDriverFactory);

  const element = (
    <GlobalHelper
      shown={true}
      placement="right"
      content="Hello"
    >
      <div />
    </GlobalHelper>
  );

  describe('testkit', () => {
    it('should exist', () => {
      expect(isTestkitExists(element, globalHelperTestkitFactory)).toBe(true);
    });
  });

  describe('enzyme testkit', () => {
    it('should exist', () => {
      expect(isEnzymeTestkitExists(element, enzymeGlobalHelperTestkitFactory, mount)).toBe(true);
    });
  });
});
