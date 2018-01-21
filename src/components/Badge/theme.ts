import {SKIN, FORM} from './constants';
import {B20, B40, D20, D40, D80, G10, G30, O10, R10, R30, Y10} from '../../colors';

const skinToColor = {
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

const skinToTextColor = {
  [SKIN.default]: D80,
  [SKIN.standard]: D80,
  [SKIN.danger]: D80,
  [SKIN.success]: D80,
  [SKIN.grey]: D80,
  [SKIN.warning]: D80,
  [SKIN.urgent]: D80,
  [SKIN.neutralStandard]: D20,
  [SKIN.neutralSuccess]: D20,
  [SKIN.nutralDanger]: D20
};

const formAndSkinToColor = (form, skin) => {
  let coloring = {};
  switch (form) {
    case FORM.solid:
      coloring = {
        color: skinToTextColor[skin],
        backgroundColor: skinToColor[skin],
        borderColor: skinToColor[skin]
      };
      break;
    case FORM.outlined:
      coloring = {
        color: skinToColor[skin],
        backgroundColor: D80,
        borderColor: skinToColor[skin]
      };
      break;
    case FORM.transparent:
      coloring = {
        color: skinToColor[skin],
        backgroundColor: 'transparent',
        borderColor: 'transparent'
      };
      break;
    default:
      break;
  }
  return {...coloring, hover: coloring}
};

export const theme = ({form, skin}) => {
  const colorAttributes = formAndSkinToColor(form, skin);

  return {
    height: 'initial',
    padding: '6px 12px',
    borderRadius: '2px',
    ...colorAttributes
  };
};
