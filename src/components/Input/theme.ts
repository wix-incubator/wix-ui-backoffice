import {palette} from '../../palette';
import {Color} from '../../colors';

interface SizeConfig {
    small: number;
    medium: number;
    large: number;
}

interface SkinConfig {
    standard: Color;
    error: Color;
}

export type Size = keyof SizeConfig;
export type Skin = keyof SkinConfig;

const skins: { [key: string]: SkinConfig } = {
    skinToColor: {
        standard: palette.mainInputText,
        error: palette.mainInputText
    },
    skinToHoverBackgroundColor: {
        standard: palette.dividers,
        error: palette.dividers
    },
    skinToBorderColor: {
        standard: palette.notifications,
        error: palette.danger
    },
    skinToHoverBorderColor: {
        standard: palette.notifications,
        error: palette.danger
    },
    skinToFocusBorderColor: {
        standard: palette.mainHover,
        error: palette.danger
    }
};

const sizes: { [key: string]: SizeConfig } = {
    sizeToHeight: {small: 30, medium: 36, large: 60},
    sizeToFontSize: {small: 14, medium: 16, large: 22}
};

export const theme: Function = ({size, skin}: {size: Size, skin: Skin}) => ({
  color: skins.skinToColor[skin],
  backgroundColor: palette.white,
  borderColor: skins.skinToBorderColor[skin],

  height: sizes.sizeToHeight[size],
  lineHeight: `${sizes.sizeToHeight[size] - 2}px`,
  fontSize: sizes.sizeToFontSize[size],

  hover: {
    color: skins.skinToColor[skin],
    borderColor: skins.skinToHoverBorderColor[skin],
    backgroundColor: skins.skinToHoverBackgroundColor[skin]
  },

  focus: {
    color: skins.skinToColor[skin],
    borderColor: skins.skinToFocusBorderColor[skin],
    backgroundColor: palette.white,
    hoverBackgroundColor: skins.skinToHoverBackgroundColor[skin]
  },

  disabled: {
    color: palette.disabled,
    backgroundColor: palette.white,
    borderColor: palette.disabledDividers,
    hoverBorderColor: palette.disabledFields
  }
});
