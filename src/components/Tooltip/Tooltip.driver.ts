import {tooltipDriverFactory as coreTooltipDriverFactory} from 'wix-ui-core/dist/src/components/Tooltip/Tooltip.driver';

export const toolTipDriverFactory = ({element, component, eventTrigger, wrapper}) => {
  const driver = coreTooltipDriverFactory({element, component, eventTrigger, wrapper});
  return {
    exists: () => driver.exists(),
    mouseEnter: () => driver.mouseEnter(),
    mouseLeave: () => driver.mouseLeave(),
    isOpen: () => driver.isContentExists()
  };
};
