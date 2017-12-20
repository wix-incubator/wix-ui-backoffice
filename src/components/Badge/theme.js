import {SKIN} from './constants';
import {D20, B20, R10, G10, D40, Y10, O10, B40, G30, R30} from '../../colors';

const HEIGHT = '24px';
const PADDING = '6px 12px';
const BORDER_RADIUS = '2px';

const typeToColor = {
  [SKIN.default]: D20,
  [SKIN.standard]: B20,
  [SKIN.danger]: R10,
  [SKIN.success]: G10,
  [SKIN.grey]: D40,
  [SKIN.warning]: Y10,
  [SKIN.urgent]: O10,
  [SKIN.neutralStandard]: B40,
  [SKIN.neutralSuccess]: G30,
  [SKIN.nutralDanger]: R30
};

export const theme = ({skin}) => ({
  height: HEIGHT,
  padding: PADDING,
  borderRadius: BORDER_RADIUS,
  backgroundColor: typeToColor[skin],
  borderColor: typeToColor[skin]
});
