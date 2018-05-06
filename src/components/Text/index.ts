import { Text as TextComponent } from './Text';
import { createHOC } from 'wix-ui-core/dist/src/createHOC';

export const Text = createHOC(TextComponent);
export { Skin as TextSkin, SKINS as TEXT_SKINS, Size as TextSize, SIZES as TEXT_SIZES } from './constants';