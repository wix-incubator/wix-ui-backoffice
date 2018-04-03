import * as React from 'react';
import {tooltipDriverFactory} from './Tooltip.driver';
import {Tooltip} from './';
import {createDriverFactory} from 'wix-ui-test-utils/driver-factory';

describe('Tooltip', () => {
  const createDriver = createDriverFactory(tooltipDriverFactory);

  it('renders BO tooltip', () => {
    const tooltip = createDriver(<Tooltip />);
    expect(tooltip.exists()).toBeTruthy();
  });

  it('remains open when hovered out if relevant property is provided', () => {
    const tooltip = createDriver(<Tooltip shouldCloseOnClickOutside/>);
    expect(tooltip.isContentElementExists()).toBeFalsy();

    tooltip.mouseEnter();
    expect(tooltip.isContentElementExists()).toBeTruthy();

    tooltip.mouseLeave();
    expect(tooltip.isContentElementExists()).toBeTruthy();
  });
});
