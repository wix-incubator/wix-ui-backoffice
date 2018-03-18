import {palette} from '../../palette';
import {Color} from '../../colors';

export interface SkinConfig {
    standard: Color;
    success: Color;
    error: Color;
}

export type Skin = keyof SkinConfig;

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

export const theme: Function = ({skin}: { skin: Skin }) => ({

    backgroundColor: skins.skinToBackgroundColor[skin],
    backgroundColorChecked: skins.skinToBackgroundColorChecked[skin],
    backgroundColorDisabled: palette.disabledButton,
    backgroundColorHover: skins.skinToHoverBackgroundColor[skin],
    backgroundColorHoverChecked: skins.skinToHoverBackgroundColor[skin],
    backgroundColorFocus: skins.skinToHoverBackgroundColor[skin],

    color: skins.skinToColor[skin],
    colorChecked: skins.skinToColorChecked[skin],
    colorDisabled: palette.disabledDividers,
    colorCheckedDisabled: palette.disabledButton,
    colorHover: skins.skinToHoverColor[skin],
    colorHoverChecked: skins.skinToHoverColor[skin],
    colorFocus: skins.skinToHoverColor[skin],
});
