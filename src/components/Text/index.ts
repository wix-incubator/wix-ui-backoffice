import { Text as TextComponent , Props} from './Text';
import { createHOC } from 'wix-ui-core/dist/src/createHOC';

export const Text = createHOC(TextComponent);
export {Props as TextProps};
export { Skin as TextSkin, SKINS as TEXT_SKINS, Size as TextSize, SIZES as TEXT_SIZES } from './constants';