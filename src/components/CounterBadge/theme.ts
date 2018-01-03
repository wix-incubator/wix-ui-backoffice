import {Skin} from './constants';
import {D20, B10, R10, G10, Color} from '../../colors';

const HEIGHT: string = '18px';
const PADDING: string = '3px 6px';
const BORDER_RADIUS: string = '12px';

const typeToColor: { [key: string]: Color} = {
  [Skin.DEFAULT]: D20,
  [Skin.STANDARD]: B10,
  [Skin.URGENT]: R10,
  [Skin.SUCCESS]: G10
};

export const theme = ({skin}: {skin: Skin}) => ({
  height: HEIGHT,
  padding: PADDING,
  borderRadius: BORDER_RADIUS,
  backgroundColor: typeToColor[skin],
  borderColor: typeToColor[skin]
});
