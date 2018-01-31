import {Skin} from './constants';
import {D20, B10, R10, G10, Color} from '../../colors';

const typeToColor: { [key: string]: Color} = {
  [Skin.DEFAULT]: D20,
  [Skin.STANDARD]: B10,
  [Skin.URGENT]: R10,
  [Skin.SUCCESS]: G10
};

export const theme = ({skin, canGrow}: {skin: Skin, canGrow: boolean}) => ({
  border: 'initial',
  height: '18px',
  lineHeight: '1',
  minWidth: '18px',
  borderRadius: '12px',
  padding: canGrow ? '2px 6px' : '2px',
  backgroundColor: typeToColor[skin],
  borderColor: typeToColor[skin],
});
