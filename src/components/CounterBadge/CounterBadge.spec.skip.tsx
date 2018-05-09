import * as React from 'react';
import {counterBadgeDriverFactory} from './CounterBadge.driver';
import {CounterBadge} from './';
import {createDriverFactory} from 'wix-ui-test-utils/driver-factory';
import {isTestkitExists} from 'wix-ui-test-utils/vanilla';
import {isEnzymeTestkitExists} from 'wix-ui-test-utils/enzyme';
import {counterBadgeTestkitFactory} from '../../testkit';
import {counterBadgeTestkitFactory as enzymeCounterBadgeTestkitFactory} from '../../testkit/enzyme';
import {mount} from 'enzyme';

describe('CounterBadge', () => {
  const createDriver = createDriverFactory(counterBadgeDriverFactory);

  describe('general', () => {
    describe('children prop', () => {

      it('should render the children', () => {
        const driver = createDriver(
          <CounterBadge>
            12
          </CounterBadge>,
        );
        expect(driver.getContentText()).toBe('12');
      });

      it('should render the children as a component', () => {
        const driver = createDriver(
          <CounterBadge>
            <div data-hook="comp">12</div>
          </CounterBadge>,
        );
        expect(driver.getContentText()).toBe('12');
      });

      it('should render a default empty child', () => {
        const driver = createDriver(
          <CounterBadge/>,
        );
        expect(driver.getContentText()).toBe('');
      });
    });
  });

  describe('validations', () => {
    it('should throw when children length is more than 2', () => {
      expect(() => mount(
        <CounterBadge>
          123
        </CounterBadge>,
      )).toThrow('CounterBadge children max length can not be more than 2');
    });
  });

  describe('testkit', () => {
    it('should exist', () => {
      expect(isTestkitExists(<CounterBadge>12</CounterBadge>, counterBadgeTestkitFactory)).toBe(true);
    });
  });

  describe('enzyme testkit', () => {
    it('should exist', () => {
      expect(isEnzymeTestkitExists(<CounterBadge>12</CounterBadge>, enzymeCounterBadgeTestkitFactory, mount)).toBe(true);
    });
  });
});
