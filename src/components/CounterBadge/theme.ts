import {Skin} from './constants';
import {D20, B10, R10, G10, Color} from '../../colors';

const typeToColor: { [key: string]: Color} = {
  [Skin.DEFAULT]: D20,
  [Skin.STANDARD]: B10,
  [Skin.URGENT]: R10,
  [Skin.SUCCESS]: G10
};

export const theme: Function = ({skin}: {skin: Skin}) => ({
  height: 'initial',
  padding: '3px 6px',
  borderRadius: '12px',
  backgroundColor: typeToColor[skin],
  borderColor: typeToColor[skin],
  hover: {
    backgroundColor: typeToColor[skin],
    borderColor: typeToColor[skin],
  }
});
