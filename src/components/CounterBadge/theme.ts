import {Skin} from './constants';

type Color = string;

const D20: Color = '#32536A';
const B10: Color = '#3899ec';
const R10: Color = '#ee5951';
const G10: Color = '#60bc57';

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
