import * as React from 'react';
import { createDriverFactory } from 'wix-ui-test-utils/driver-factory';
import { TooltipProps as CoreTooltipProps } from 'wix-ui-core/dist/src/components/tooltip';
import { mount } from 'enzyme';
import { loadableDriverFactoryWithTooltip } from './Loadable.driver';
import { Loadable } from './Loadable';
import { TooltipProps } from '../Tooltip';
import * as eventually from 'wix-eventually';

class LoadableTooltip extends Loadable<CoreTooltipProps & TooltipProps> {}

describe('Loadable with sync loader', () => {
  const createDriver = createDriverFactory(loadableDriverFactoryWithTooltip);

  it('should load modules initially', () => {
    const fallBackElement = <span data-hook="error-icon">Hey!</span>;
    const wrapper = createDriver(
      <LoadableTooltip
        loader={() => require('../Tooltip')}
        defaultComponent={fallBackElement}
        componentKey="Tooltip"
        shouldLoadComponent
      >
        {Tooltip => {
          return (
            <Tooltip
              data-hook="linear-progressbar-tooltip"
              placement="top"
              content="kek"
            >
              {fallBackElement}
            </Tooltip>
          );
        }}
      </LoadableTooltip>,
    );
    expect(wrapper.isLoaded()).toBe(true);
  });

  it('should load modules after shouldLoadComponent changed', () => {
    const tooltipSelector = '[data-hook="tooltip-child"]';
    const wrapper = mount(
      <LoadableTooltip
        loader={() => require('../Tooltip')}
        defaultComponent={<span data-hook="default-component">Hey!</span>}
        componentKey="Tooltip"
        shouldLoadComponent={false}
      >
        {Tooltip => {
          return (
            <Tooltip
              data-hook="linear-progressbar-tooltip"
              placement="top"
              content="kek"
            >
              {<span data-hook="tooltip-child">Hey!</span>}
            </Tooltip>
          );
        }}
      </LoadableTooltip>,
    );
    expect(wrapper.find(tooltipSelector).exists()).toBe(false);
    wrapper.setProps({ shouldLoadComponent: true });
    setTimeout(() => {
      expect(wrapper.find(tooltipSelector).exists()).toBe(true);
    });
  });
});

describe('Loadable with async loader', () => {
  const createDriver = createDriverFactory(loadableDriverFactoryWithTooltip);

  it('should load modules initially', async () => {
    const fallBackElement = <span data-hook="error-icon">Hey!</span>;
    const wrapper = createDriver(
      <div>
        <LoadableTooltip
          loader={() => import('../Tooltip')}
          defaultComponent={fallBackElement}
          componentKey="Tooltip"
          shouldLoadComponent
        >
          {Tooltip => {
            return (
              <Tooltip
                data-hook="linear-progressbar-tooltip"
                placement="top"
                content="kek"
              >
                {fallBackElement}
              </Tooltip>
            );
          }}
        </LoadableTooltip>
        ,
      </div>,
    );
    expect(wrapper.isLoaded()).toBe(false);
    await eventually(() => expect(wrapper.isLoaded()).toBe(true));
  });  

  it('should load modules after shouldLoadComponent changed', () => {
    const tooltipSelector = '[data-hook="tooltip-child"]';
    const wrapper = mount(
      <LoadableTooltip
        loader={() => import('../Tooltip')}
        defaultComponent={<span data-hook="default-component">Hey!</span>}
        componentKey="Tooltip"
        shouldLoadComponent={false}
      >
        {Tooltip => {
          return (
            <Tooltip
              data-hook="linear-progressbar-tooltip"
              placement="top"
              content="kek"
            >
              {<span data-hook="tooltip-child">Hey!</span>}
            </Tooltip>
          );
        }}
      </LoadableTooltip>,
    );
    expect(wrapper.find(tooltipSelector).exists()).toBe(false);
    wrapper.setProps({ shouldLoadComponent: true });
    setTimeout(() => {
      expect(wrapper.find(tooltipSelector).exists()).toBe(true);
    });
  });
});