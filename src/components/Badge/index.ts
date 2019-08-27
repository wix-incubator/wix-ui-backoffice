import {Badge as BadgeComponent} from './Badge';
import {createHOC} from 'wix-ui-core/dist/standalone/src/createHOC';
import {withFocusable} from 'wix-ui-core/dist/standalone/src/hocs/Focusable/FocusableHOC';

export const Badge = createHOC(
  withFocusable(BadgeComponent)
);

export * from './constants'
