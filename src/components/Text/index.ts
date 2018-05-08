import { Text as TextComponent , Props } from './Text';
import { createHOC } from 'wix-ui-core/dist/src/createHOC';

export const Text = createHOC(TextComponent);
export { Props as TextProps }
export { Skin as TextSkin, Size as TextSize } from './constants';