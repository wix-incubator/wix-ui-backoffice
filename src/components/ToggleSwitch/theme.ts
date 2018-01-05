import {palette} from '../../palette';
import {Color} from '../../colors';

interface SizeConfig {
    'x-small': string;
    small: string;
    large: string;
}

interface SkinConfig {
    standard: Color;
    success: Color;
    error: Color;
}

export type Size = keyof SizeConfig;
export type Skin = keyof SkinConfig;

const sizes: { [key: string]: SizeConfig } = {
    sizeToOuterLabelWidth: {'x-small': '28px', small: '36px', large: '45px'},
    sizeToOuterLabelHeight: {'x-small': '15px', small: '20px', large: '24px'},
    sizeToInnerLabelWidth: {'x-small': '13px', small: '18px', large: '21px'},
    sizeToInnerLabelHeight: {'x-small': '13px', small: '18px', large: '22px'},
    sizeTolabelMovementRange: {'x-small': '14px', small: '17px', large: '23px'},
    sizeTotoggleIconDisplay: {'x-small': 'none !important', small: 'block', large: 'block'}
};

const skins: { [key: string]: SkinConfig } = {
    skinToBackgroundColor: {
        standard: palette.tableSelected,
        success: palette.successNotifications,
        error: palette.dangerNotifications
    },
    skinToBackgroundColorChecked: {
        standard: palette.main,
        success: palette.ctaHover,
        error: palette.danger
    },
    skinToColor: {
        standard: palette.tableSelected,
        success: palette.successNotifications,
        error: palette.dangerNotifications
    },
    skinToColorChecked: {
        standard: palette.main,
        success: palette.ctaHover,
        error: palette.danger
    },
    skinToHoverBackgroundColor: {
        standard: palette.mainHover,
        success: palette.successHover,
        error: palette.dangerHover
    },
    skinToHoverColor: {
        standard: palette.mainHover,
        success: palette.successHover,
        error: palette.dangerHover
    }
};

export const theme: Function = ({size, skin}: { size: Size, skin: Skin }) => ({
    outerLabelWidth: sizes.sizeToOuterLabelWidth[size],
    outerLabelHeight: sizes.sizeToOuterLabelHeight[size],

    innerLabelWidth: sizes.sizeToInnerLabelWidth[size],
    innerLabelHeight: sizes.sizeToInnerLabelHeight[size],
    innerLabelBackgroundColor: palette.white,

    labelMovementRange: sizes.sizeTolabelMovementRange[size],
    toggleIconDisplay: sizes.sizeTotoggleIconDisplay[size],
    toggleIconWidth: '10px',
    toggleIconHeight: '8px',
    toggleIconFontSize: '10px',

    backgroundColor: skins.skinToBackgroundColor[skin],
    backgroundColorChecked: skins.skinToBackgroundColorChecked[skin],
    backgroundColorDisabled: palette.disabledButton,
    backgroundColorHover: skins.skinToHoverBackgroundColor[skin],
    backgroundColorFocus: skins.skinToHoverBackgroundColor[skin],

    color: skins.skinToColor[skin],
    colorChecked: skins.skinToColorChecked[skin],
    colorDisabled: palette.disabledDividers,
    colorCheckedDisabled: palette.disabledButton,
    colorHover: skins.skinToHoverColor[skin]
});
