import {Badge as BadgeComponent} from './Badge';
import {createHOC} from 'wix-ui-core/dist/src/createHOC';
import {withFocusable} from 'wix-ui-core/dist/src/hocs/Focusable/FocusableHOC';

export const Badge = createHOC(
  withFocusable(BadgeComponent)
);

export * from './constants'
