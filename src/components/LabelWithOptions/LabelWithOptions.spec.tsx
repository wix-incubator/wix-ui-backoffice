import * as React from 'react';
import {createDriverFactory} from 'wix-ui-test-utils/driver-factory';
import {labelWithOptionsDriverFactory} from './LabelWithOptions.driver';
import {LabelWithOptions} from '.';
import {labelWithOptionsTestkitFactory} from '../../testkit';
import {labelWithOptionsTestkitFactory as enzymeLabelWithOptionsTestkitFactory} from '../../testkit/enzyme';
import {isEnzymeTestkitExists} from 'wix-ui-test-utils/enzyme';
import {isTestkitExists} from 'wix-ui-test-utils/vanilla';
import {mount} from 'enzyme';

describe('LabelWithOptions', () => {
  const createDriver = createDriverFactory(labelWithOptionsDriverFactory);

  it('should render LabelWithOptions', () => {
    const driver = createDriver(<LabelWithOptions options={[]} />);
    expect(driver.isTargetElementExists()).toBeTruthy();
    expect(driver.isContentElementExists()).toBeFalsy();
  });

  describe('testkit', () => {
    it('should exist', () => {
      expect(isTestkitExists(<LabelWithOptions options={[]}/>, labelWithOptionsTestkitFactory)).toBe(true);
    });
  });

  describe('enzyme testkit', () => {
    it('should exist', () => {
      expect(isEnzymeTestkitExists(<LabelWithOptions options={[]}/>, enzymeLabelWithOptionsTestkitFactory, mount)).toBe(true);
    });
  });
});
