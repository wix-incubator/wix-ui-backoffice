import * as React from 'react';
import {textDriverFactory} from './Text.driver';
import {isEnzymeTestkitExists} from 'wix-ui-test-utils/enzyme';
import {createDriverFactory} from 'wix-ui-test-utils/driver-factory';
import {isTestkitExists} from 'wix-ui-test-utils/vanilla';
import {Text} from './';
import {coreTextTestkitFactory as textTestkitFactory} from '../../../testkit';
import {coreTextTestkitFactory as enzymeTextTestkitFactory} from '../../../testkit/enzyme';
import {mount} from 'enzyme';

describe('Text', () => {

  const createDriver = createDriverFactory(textDriverFactory);

  describe('ellipsis attribute', () => {
    it('should not have ellipsis by default', () => {
      const driver = createDriver(<Text>Hello World</Text>);
      expect(driver.hasEllipsis()).toBeFalsy();
    });

    it('should have ellipsis', () => {
      const driver = createDriver(<Text ellipsis>Hello World</Text>);
      expect(driver.hasEllipsis()).toBeTruthy();
    });
  });

  describe('title attribute', () => {
    it('should not have title attribute by default', () => {
      const driver = createDriver(<Text>Hello World</Text>);
      expect(driver.hasTitleAttribute()).toBeFalsy();
    });

    it('should have title attribute when has ellipsis', () => {
      const driver = createDriver(<Text ellipsis>Hello World</Text>);
      expect(driver.hasTitleAttribute()).toBeTruthy();
      expect(driver.getTitle()).toBe('Hello World');
    });

    it('should not have title attribute when has ellipsis and children is an element', () => {
      const driver = createDriver(<Text ellipsis><span>Hello World</span></Text>);
      expect(driver.hasTitleAttribute()).toBeFalsy();
    });

    it('should not have title attribute when has ellipsis and forceHideTitle is true', () => {
      const driver = createDriver(<Text ellipsis forceHideTitle>Hello World</Text>);
      expect(driver.hasTitleAttribute()).toBeFalsy();
    });
  });

  describe('tagName prop', () => {
    it('should be span by default', () => {
      const driver = createDriver(<Text>Hello</Text>);
      expect(driver.getTagName()).toBe('span');
    });

    it('should be configueable', () => {
      const driver = createDriver(<Text tagName="h1">Hello</Text>);
      expect(driver.getTagName()).toBe('h1');
    });
  });

  describe('children prop', () => {
    it('should be rendered when given as a string', () => {
      const children = 'Hello World';
      const driver = createDriver(<Text>{children}</Text>);
      expect(driver.getText()).toBe(children);
    });

    it('should be rendered when given as an element', () => {
      const children = <div>Hello World</div>;
      const driver = createDriver(<Text>{children}</Text>);
      expect(driver.getText()).toBe('<div>Hello World</div>');
    });
  });

  describe('testkit', () => {
    it('should exist', () => {
      expect(isTestkitExists(<Text>Hello World</Text>, textTestkitFactory)).toBe(true);
    });
  });

  describe('enzyme testkit', () => {
    it('should exist', () => {
      expect(isEnzymeTestkitExists(<Text>Hello World</Text>, enzymeTextTestkitFactory, mount)).toBe(true);
    });
  });
});
