import * as React from 'react';
import {toggleSwitchDriverFactory} from './ToggleSwitch.driver';
import {ToggleSwitch} from './';
import {createDriverFactory} from 'wix-ui-test-utils/driver-factory';
import {isEnzymeTestkitExists} from 'wix-ui-test-utils/enzyme';
import {isTestkitExists} from 'wix-ui-test-utils/vanilla';
import {mount} from 'enzyme';
import {toggleSwitchTestkitFactory} from '../../testkit';
import {toggleSwitchTestkitFactory as enzymeToggleSwitchTestkitFactory} from '../../testkit/enzyme';
import {SKINS, SIZES, Skin, Size} from './constants';

describe('ToggleSwitch', () => {
  const createDriver = createDriverFactory(toggleSwitchDriverFactory);

  describe('skin prop', () => {
    it(`should be ${SKINS.standard} by default`, () => {
      const wrapper = createDriver(<ToggleSwitch/>);
      expect(wrapper.getSkin()).toBe(SKINS.standard);
    });

    Object.keys(SKINS).forEach((skin: Skin) => {
      it(`should be ${skin}`, () => {
        const wrapper = createDriver(<ToggleSwitch skin={skin}/>);
        expect(wrapper.getSkin()).toBe(skin);
      });
    });
  });

  describe('size prop', () => {
    it(`should be ${SIZES.large} by default`, () => {
      const wrapper = createDriver(<ToggleSwitch/>);
      expect(wrapper.getSize()).toBe(SIZES.large);
    });

    Object.keys(SIZES).forEach((size: Size) => {
      it(`should be ${size}`, () => {
        const wrapper = createDriver(<ToggleSwitch size={size}/>);
        expect(wrapper.getSize()).toBe(size);
      });
    });
  });

  describe('knobIcons', () => {
    const getSvgViewBoxSize = wrapper =>
      Number(wrapper.getKnobIcon().querySelector('svg').getAttribute('viewBox').slice(4, 6));

    describe('checkedIcon', () => {
      it('should be bigger when when size=large comparing to size=medium', () => {
        const largeIconwrapper = createDriver(<ToggleSwitch checked size="large"/>);
        const mediumIconWrapper = createDriver(<ToggleSwitch checked size="medium"/>);

        const largeViewBoxSize = getSvgViewBoxSize(largeIconwrapper);
        const mediumViewBoxSize = getSvgViewBoxSize(mediumIconWrapper);

        expect(largeViewBoxSize).toBeGreaterThan(mediumViewBoxSize);
      });

      it('should not be visible when size=small', () => {
        const wrapper = createDriver(<ToggleSwitch size="small"/>);
        expect(wrapper.hasKnobIcon()).toBe(false);
      });
    });

    describe('uncheckedIcon', () => {
      it('should be bigger when when size=large comparing to size=medium', () => {
        const largeIconwrapper = createDriver(<ToggleSwitch size="large"/>);
        const mediumIconWrapper = createDriver(<ToggleSwitch size="medium"/>);

        const largeViewBoxSize = getSvgViewBoxSize(largeIconwrapper);
        const mediumViewBoxSize = getSvgViewBoxSize(mediumIconWrapper);

        expect(largeViewBoxSize).toBeGreaterThan(mediumViewBoxSize);
      });

      it('should not be visible when size=small', () => {
        const wrapper = createDriver(<ToggleSwitch size="small"/>);
        expect(wrapper.hasKnobIcon()).toBe(false);
      });
    });
  });

  describe('block props', () => {
    it('should not pass inline styles prop', () => {
      const styles = {root: {color: 'green'}};
      const wrapper = createDriver(<ToggleSwitch styles={styles} size="small"/>);
      expect(wrapper.getRootStyles().color).not.toBe('green');
    });
  });

  describe('testkit', () => {
    it('should exist', () => {
      expect(isTestkitExists(<ToggleSwitch/>, toggleSwitchTestkitFactory)).toBe(true);
    });
  });

  describe('enzyme testkit', () => {
    it('should exist', () => {
      expect(isEnzymeTestkitExists(<ToggleSwitch/>, enzymeToggleSwitchTestkitFactory, mount)).toBe(true);
    });
  });
});
