import * as t from '../../typography';
import {palette} from '../../palette';
import {Color} from '../../colors';

export type Appearance = 'H0' | 'H1' | 'H2' | 'H3';
export type Skin = keyof ColorsConfig;

interface ColorsConfig {
  dark: Color;
  light: Color;
}

interface TypographyConfig {
    fontFamily: t.Typography;
    fontSize: string;
    lineHeight: string;
    textTransform?: string;
    letterSpacing?: string;
}

const createTypography: Function = (fontFamily: t.Typography, fontSize: string, lineHeight: string): TypographyConfig => ({
  fontFamily,
  fontSize,
  lineHeight
});

const typographies: { [key: string]: TypographyConfig} = {
  H0: createTypography(t.fontUltraThin, '48px', '54px'),
  H1: createTypography(t.fontThin, '36px', '48px'),
  H2: createTypography(t.fontLight, '20px', '36px'),
  H3: {...createTypography(t.fontLight, '13px', '24px'), textTransform: 'uppercase', letterSpacing: '2px'},
  H4: {...createTypography(t.fontLight, '10px', '20px'), textTransform: 'uppercase', letterSpacing: '2px'}
};

const colors: { [key: string]: ColorsConfig} = {
  H0: {dark: palette.heading0Dark, light: palette.heading0Light},
  H1: {dark: palette.heading1Dark, light: palette.heading1Light},
  H2: {dark: palette.heading2Dark, light: palette.heading2Light},
  H3: {dark: palette.heading3Dark, light: palette.heading3Light},
  H4: {dark: palette.heading4Dark, light: palette.heading4Light}
};

export const theme: Function = ({appearance, skin}: {appearance: Appearance, skin: Skin}) => ({
  ...typographies[appearance],
  color: colors[appearance][skin]
});
