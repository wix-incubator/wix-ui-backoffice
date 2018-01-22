import {Skin} from './constants';
import {D20, B10, R10, G10, Color} from '../../colors';

const typeToColor: { [key: string]: Color} = {
  [Skin.DEFAULT]: D20,
  [Skin.STANDARD]: B10,
  [Skin.URGENT]: R10,
  [Skin.SUCCESS]: G10
};

export const theme = ({skin}: {skin: Skin}) => ({
  border: 'initial',
  height: '18px',
  width: '18px',
  borderRadius: '50%',
  padding: '0',
  backgroundColor: typeToColor[skin],
  borderColor: typeToColor[skin],
});
