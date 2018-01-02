import * as c from '../../colors';
import {Size} from './constants';
import {hexToRgba} from '../../utils';

export type Skin =

'primaryStandard' |
'primaryError' |
'primaryPremium' |
'primaryWhite' |
'transparentGrey' |
'secondaryGrey' |
'secondaryStandard' |
'secondaryError' |
'secondaryPremium' |
'secondaryWhite' |
'tertiaryStandard' |
'close-standard' |
'close-dark' |
'close-white' |
'close-lightBlue' |
'close-transparent';

// ************************** BELOW ARE DEPRECATED (supported for wix-style-react) **************************
export type DeprecatedSkin =

'transparent' |
'fullred' |
'fullgreen' |
'fullpurple' |
'emptyred' |
'emptygreen' |
'emptybluesecondary' |
'emptyblue' |
'emptypurple' |
'fullblue' |
'transparentblue' |
'whiteblue' |
'whiteblueprimary' |
'whitebluesecondary' |
'icon-greybackground' |
'icon-standard' |
'icon-standardsecondary' |
'icon-white' |
'icon-whitesecondary';











class BaseColorSkin {
  hover: BaseColorSkinOverrides;
  active: BaseColorSkinOverrides;
  disabled: BaseColorSkinOverrides;

  constructor(public color: string, public backgroundColor: string, public borderColor: string, hoverColor: string, hoverBg: string, hoverBc: string, activeColor: string, activeBg: string, activeBc: string, disabledColor: string, disabledBg: string, disabledBc: string) {
    this.hover = new BaseColorSkinOverrides(hoverColor, hoverBg, hoverBc);
    this.active = new BaseColorSkinOverrides(activeColor, activeBg, activeBc);
    this.disabled = new BaseColorSkinOverrides(disabledColor, disabledBg, disabledBc);
  }
}

class BaseColorSkinOverrides {
  constructor(public color: string, public backgroundColor: string, public borderColor: string) {
  }
}

const createPrimaryColorSkin = (color: string, hoverColor: string): BaseColorSkin =>
  new BaseColorSkin(c.D80, color, color, c.D80, hoverColor, hoverColor, c.D80, color, color, c.D80, c.D55, c.D55);

const createSecondaryColorSkin = (color: string, hoverColor: string): BaseColorSkin =>
  new BaseColorSkin(color, c.TRANSPARENT, color, c.D80, hoverColor, hoverColor, c.D80, color, color, c.D55, c.TRANSPARENT, c.D55);

const createTertiaryColorSkin = (color: string, hoverColor: string): BaseColorSkin =>
  new BaseColorSkin(color, c.D80, c.D80, c.D80, hoverColor, hoverColor, c.D80, color, color, c.D55, c.TRANSPARENT, c.D55);

const createPrimaryWhiteColorSkin = (color: string, hoverColor: string, activeColor: string): BaseColorSkin =>
  new BaseColorSkin(color, c.D80, c.D80, color, hoverColor, hoverColor, color, activeColor, activeColor, c.D80, c.D55, c.D55);

const createSecondaryWhiteColorSkin = (color: string, hoverColor: string, activeColor: string): BaseColorSkin =>
  new BaseColorSkin(c.D80, c.TRANSPARENT, c.D80, color, hoverColor, hoverColor, color, activeColor, activeColor, c.D55, c.TRANSPARENT, c.D55);

const createTransparentColorSkin = (color: string, hover: string, active: string): BaseColorSkin =>
  new BaseColorSkin(color, c.TRANSPARENT, c.TRANSPARENT, hover, c.TRANSPARENT, c.TRANSPARENT, active, c.TRANSPARENT, c.TRANSPARENT, c.D55, c.TRANSPARENT, c.TRANSPARENT);

const greyscale: string = hexToRgba(c.D10, 0.24);
const greyscaleHover: string = hexToRgba(c.D10, 0.3);
const greyscaleActive: string = hexToRgba(c.D10, 0.36);
const transparentGrey: BaseColorSkin = new BaseColorSkin(c.D80, greyscale, c.TRANSPARENT, c.D80, greyscaleHover, c.TRANSPARENT, c.D80, greyscaleActive, c.TRANSPARENT, c.D80, c.D55, c.D55);
const secondaryGrey: BaseColorSkin = new BaseColorSkin(c.D40, c.TRANSPARENT, c.D40, c.D80, c.D20, c.D20, c.D80, c.D10, c.D10, c.D80, c.D55, c.D55);

const skins: {[index: string]: BaseColorSkin} = {
  transparentGrey,
  secondaryGrey,
  primaryStandard: createPrimaryColorSkin(c.B10, c.B20),
  primaryError: createPrimaryColorSkin(c.R10, c.R20),
  primaryPremium: createPrimaryColorSkin(c.P10, c.P20),
  primaryWhite: createPrimaryWhiteColorSkin(c.B10, c.B50, c.B40),
  secondaryStandard: createSecondaryColorSkin(c.B10, c.B20),
  secondaryError: createSecondaryColorSkin(c.R10, c.R20),
  secondaryPremium: createSecondaryColorSkin(c.P10, c.P20),
  secondaryWhite: createSecondaryWhiteColorSkin(c.B10, c.B50, c.B40),
  tertiaryStandard: createTertiaryColorSkin(c.B10, c.B20),
  'close-standard': createTransparentColorSkin(c.B10, c.B20, c.B10),
  'close-dark': createTransparentColorSkin(c.D10, c.D10, c.D10),
  'close-white': createTransparentColorSkin(c.B40, c.B50, c.B40),
  'close-lightBlue': new BaseColorSkin(c.B10, c.B30, c.B30, c.B10, c.B40, c.B40, c.B10, c.B30, c.B30, c.D80, c.D55, c.D55),
  'close-transparent': transparentGrey
};

//**************************  deprecated themes (support for wix-react-style) **************************
skins.transparent = skins.transparentGrey;
skins.fullred = skins.primaryError;
skins.fullgreen = createPrimaryColorSkin(c.G10, c.G20);
skins.fullblue = skins.primaryStandard;
skins.fullpurple = skins.primaryPremium;
skins.emptyred = skins.secondaryError;
skins.emptygreen = createSecondaryColorSkin(c.G10, c.G20);
skins.emptyblue = skins.transparentblue = skins.secondaryStandard;
skins.emptypurple = skins.secondaryPremium;
skins.emptybluesecondary = skins.primaryWhite;
skins.whiteblue = skins.tertiaryStandard;
skins.whiteblueprimary = skins.primaryWhite;
skins.whitebluesecondary = skins.secondaryWhite;
skins['icon-standard'] = skins.primaryStandard;
skins['icon-standardsecondary'] = skins.secondaryStandard;
skins['icon-greybackground'] = skins.tertiaryStandard;
skins['icon-white'] = skins.primaryWhite;
skins['icon-whitesecondary'] = skins.secondaryWhite;

const sizes: { [index: string]: SizeConfig } = {
  [Size.TINY]: {
    height: '24px',
    borderRadius: '21px',
    padding: '0',
    contentPadding: '0 12px'
  },
  [Size.SMALL]: {
    height: '30px',
    borderRadius: '21px',
    padding: '0',
    contentPadding: '0 18px'
  },
  [Size.MEDIUM]: {
    height: '36px',
    borderRadius: '21px',
    padding: '0',
    contentPadding: '0 24px'
  },
  [Size.LARGE]: {
    height: '42px',
    borderRadius: '21px',
    padding: '0',
    contentPadding: '0 30px'
  }
};

interface SizeConfig {
  height: string;
  width?: string;
  borderRadius: string;
  padding: string | 0;
  contentPadding?: string;
}

const iconSizes: { [index: string]: SizeConfig } = {
  [Size.SMALL]: {
    height: '30px',
    width: '30px',
    borderRadius: '50px',
    padding: 0
  },
  [Size.MEDIUM]: {
    height: '36px',
    width: '36px',
    borderRadius: '50px',
    padding: 0
  }
};

const closeSizes: { [index: string]: SizeConfig } = {
  [Size.MEDIUM]: {
    height: '18px',
    width: '18px',
    borderRadius: '50px',
    padding: 0
  },
  [Size.LARGE]: {
    height: '24px',
    width: '24px',
    borderRadius: '50px',
    padding: 0
  }
};

const getSizeAttributes = (skin: string, size: Size, isIcon: boolean): SizeConfig => {
  if (skin.startsWith('close')) {
    return closeSizes[size];
  }
  if (skin.startsWith('icon') || isIcon) {
    return iconSizes[size];
  }
  return sizes[size];
};

export const theme = ({skin, size, isIcon}: { skin: Skin | DeprecatedSkin, size: Size, isIcon: boolean }): SizeConfig & BaseColorSkin => {
  const sizeAttributes = getSizeAttributes(skin, size, isIcon);

  if (!sizeAttributes) {
    throw new Error(`Button height "${size}" is not supported for these props: theme - "${skin}", isIcon - ${isIcon}`);
  }

  return {
    ...sizeAttributes,
    ...skins[skin]
  };
};
