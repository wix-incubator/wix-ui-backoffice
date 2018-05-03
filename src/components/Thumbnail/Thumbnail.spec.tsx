import * as React from 'react';
import {thumbnailDriverFactory} from './Thumbnail.driver';
import {Thumbnail} from './';
import {createDriverFactory} from 'wix-ui-test-utils/driver-factory';
import {isEnzymeTestkitExists} from 'wix-ui-test-utils/enzyme';
import {isTestkitExists} from 'wix-ui-test-utils/vanilla';
import {mount} from 'enzyme';
import Check from 'wix-ui-icons-common/Check';
import {thumbnailTestkitFactory} from '../../testkit';
import {thumbnailTestkitFactory as enzymeThumbnailTestkitFactory} from '../../testkit/enzyme';

describe('Thumbnail', () => {
  const createDriver = createDriverFactory(thumbnailDriverFactory);

  describe('title prop', () => {
    it('should render the given title', () => {
      const driver = createDriver(<Thumbnail title="hello"/>);
      expect(driver.titleDriver().getText()).toEqual('hello');
    });

    it('should have bold text', () => {
      const driver = createDriver(<Thumbnail title="hello"/>);
      expect(driver.titleDriver().isBold()).toEqual(true);
    });
  });

  describe('description prop', () => {
    it('should not have description by default', () => {
      const driver = createDriver(<Thumbnail title="hello"/>);
      expect(driver.hasDescription()).toBe(false);
    });

    it('should render the description', () => {
      const driver = createDriver(<Thumbnail title="hello" description="hey"/>);
      expect(driver.getDescription()).toEqual('hey');
    });
  });

  describe('image prop', () => {
    it('not be visible by default', () => {
      const driver = createDriver(<Thumbnail title="hello"/>);
      expect(driver.hasImage()).toBe(false);
    });

    it('be visible', () => {
      const driver = createDriver(<Thumbnail title="hello" image={<div>🤔</div>}/>);
      expect(driver.hasImage()).toBe(true);
    });
  });

  describe('selectedIcon', () => {
    it('should be built-in Check icon', () => {
      const driver = createDriver(<Thumbnail title="hello"/>);
      expect(driver.getSelectedIcon()).toEqual(mount(<Check size="24"/>).getDOMNode());
    });
  });

  describe('testkit', () => {
    it('should exist', () => {
      expect(isTestkitExists(<Thumbnail title="hello"/>, thumbnailTestkitFactory)).toBe(true);
    });
  });

  describe('enzyme testkit', () => {
    it('should exist', () => {
      expect(isEnzymeTestkitExists(<Thumbnail title="hello"/>, enzymeThumbnailTestkitFactory, mount)).toBe(true);
    });
  });
});
