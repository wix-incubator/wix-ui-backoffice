import * as React from 'react';
import {labelDriverFactory} from './Label.driver';
import {labelUniDriverFactory} from './Label.uni.driver';
import {Label} from './';
import {Size} from './constants';
import {createDriverFactory} from 'wix-ui-test-utils/driver-factory';
import {createUniDriverFactory} from 'wix-ui-test-utils/uni-driver-factory';
import {isEnzymeTestkitExists} from 'wix-ui-test-utils/enzyme';
import {isTestkitExists} from 'wix-ui-test-utils/vanilla';
import {mount} from 'enzyme';
import {labelTestkitFactory} from '../../testkit';
import {labelTestkitFactory as enzymeLabelTestkitFactory} from '../../testkit/enzyme';

describe('Label', () => {
  
  describe('[sync]', () => {
    runTests(createDriverFactory(labelDriverFactory));
  });

  describe('[async]', () => {
    runTests(createUniDriverFactory(labelUniDriverFactory));
  });

  function runTests(createDriver) {
    describe('size prop',  () => {
      it('should be medium by default', async() => {
        const wrapper = createDriver(<Label>Hello</Label>);
        expect(await wrapper.getSize()).toBe('medium');
      });

      it('should be small', async () => {
        const wrapper = createDriver(<Label size="small">Hello</Label>);
        expect(await wrapper.getSize()).toBe('small');
      });
    });

    describe('children prop', () => {
      it('renders', async () => {
        const wrapper = createDriver(<Label>Hello</Label>);
        expect(await wrapper.getLabelText()).toBe('Hello');
      });
    });
  }

  describe('testkit', () => {
    it('should exist', () => {
      expect(isTestkitExists(<Label>Hello World</Label>, labelTestkitFactory)).toBe(true);
    });
  });

  describe('enzyme testkit', () => {
    it('should exist', () => {
      expect(isEnzymeTestkitExists(<Label>Hello World</Label>, enzymeLabelTestkitFactory, mount)).toBe(true);
    });
  });
});
