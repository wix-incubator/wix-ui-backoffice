import * as t from '../../typography';
import * as colors from '../../colors';

interface TypographyConfig {
    fontFamily: t.Typography;
    fontSize: string;
    lineHeight: string;
    color: colors.Color;
    textTransform?: string;
    letterSpacing?: string;
}

const createTypography: Function = (fontFamily: t.Typography, fontSize: string, lineHeight: string, color: colors.Color): TypographyConfig => ({
  fontFamily,
  fontSize,
  lineHeight,
  color
});

export type Appearance =
    'T1' | 'T1.1' | 'T1.2' | 'T1.3' | 'T1.4' | 'T1.5' | 'T1.6' | 'T1.7' |
    'T2' | 'T2.1' | 'T2.2' | 'T2.3' | 'T2.4' |
    'T3' | 'T3.1' | 'T3.2' | 'T3.3' | 'T3.4' | 'T3.5' | 'T3.6' | 'T3.7' |
    'T4' | 'T4.1' | 'T4.2' | 'T4.3' | 'T4.4' | 'T4.5' | 'T4.6' | 'T4.7' |
    'T5' | 'T5.1';

const classes: { [key: string]: TypographyConfig } = {
  T1: createTypography(t.fontLight, '16px', '24px', colors.D10),
  'T1.1': createTypography(t.fontLight, '16px', '24px', colors.D20),
  'T1.2': createTypography(t.fontLight, '16px', '24px', colors.D80),
  'T1.3': createTypography(t.fontLight, '16px', '24px', colors.B10),
  'T1.4': createTypography(t.fontLight, '16px', '24px', colors.D55),
  'T1.5': createTypography(t.fontLight, '16px', '24px', colors.R10),
  'T1.6': createTypography(t.fontLight, '16px', '24px', colors.P10),
  'T1.7': createTypography(t.fontLight, '16px', '24px', colors.G10),
  T2: createTypography(t.fontRoman, '16px', '24px', colors.D10),
  'T2.1': createTypography(t.fontRoman, '16px', '24px', colors.D40),
  'T2.2': createTypography(t.fontRoman, '16px', '24px', colors.D80),
  'T2.3': createTypography(t.fontRoman, '16px', '24px', colors.B10),
  'T2.4': createTypography(t.fontRoman, '16px', '24px', colors.D55),
  T3: createTypography(t.fontLight, '14px', '18px', colors.D10),
  'T3.1': createTypography(t.fontLight, '14px', '18px', colors.D20),
  'T3.2': createTypography(t.fontLight, '14px', '18px', colors.D80),
  'T3.3': createTypography(t.fontLight, '14px', '18px', colors.B10),
  'T3.4': createTypography(t.fontLight, '14px', '18px', colors.D55),
  'T3.5': createTypography(t.fontLight, '14px', '18px', colors.R10),
  'T3.6': createTypography(t.fontLight, '14px', '18px', colors.P10),
  'T3.7': createTypography(t.fontLight, '14px', '18px', colors.G10),
  T4: createTypography(t.fontRoman, '14px', '18px', colors.D10),
  'T4.1': createTypography(t.fontRoman, '14px', '18px', colors.D20),
  'T4.2': createTypography(t.fontRoman, '14px', '18px', colors.D80),
  'T4.3': createTypography(t.fontRoman, '14px', '18px', colors.B10),
  'T4.4': createTypography(t.fontRoman, '14px', '18px', colors.D40),
  'T4.5': createTypography(t.fontRoman, '14px', '18px', colors.D55),
  'T4.6': createTypography(t.fontRoman, '14px', '18px', colors.R10),
  'T4.7': createTypography(t.fontRoman, '14px', '18px', colors.G10),
  T5: {...createTypography(t.fontMedium, '10px', '12px', colors.D20), textTransform: 'uppercase', letterSpacing: '1px'},
  'T5.1': {...createTypography(t.fontMedium, '10px', '12px', colors.D80), textTransform: 'uppercase', letterSpacing: '1px'}
};

export const theme: Function = ({appearance}: {appearance: Appearance}) => classes[appearance];
