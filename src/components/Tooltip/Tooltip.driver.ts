import {tooltipDriverFactory as coreTooltipDriverFactory} from 'wix-ui-core/dist/src/components/Tooltip/Tooltip.driver';

export const toolTipDriverFactory = ({element, component, eventTrigger, wrapper}) => {
  const driver = coreTooltipDriverFactory({element, component, eventTrigger, wrapper});
  return {
    /** returns true if the tooltip is rendered */
    exists: () => driver.exists(),
    /** simulates mouse enter on the tooltip target */
    mouseEnter: () => driver.mouseEnter(),
    /** simulates mouse leave on the tooltip target */
    mouseLeave: () => driver.mouseLeave(),
    /** returns true if the tooltip part is shown */
    isOpen: () => driver.isContentExists()
  };
};
