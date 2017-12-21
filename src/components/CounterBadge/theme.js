import {SKIN} from './constants';
import {D20, B10, R10, G10} from '../../colors';

const HEIGHT = '18px';
const PADDING = '3px 6px';
const BORDER_RADIUS = '12px';

const typeToColor = {
  [SKIN.default]: D20,
  [SKIN.standard]: B10,
  [SKIN.urgent]: R10,
  [SKIN.success]: G10
};

export const theme = ({skin}) => ({
  height: HEIGHT,
  padding: PADDING,
  borderRadius: BORDER_RADIUS,
  backgroundColor: typeToColor[skin],
  borderColor: typeToColor[skin]
});
