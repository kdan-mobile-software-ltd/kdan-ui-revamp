import { ThemeProps, FlattenInterpolation } from 'styled-components';
import { FontSize } from '../fonts';
import { CustomThemeType } from '../themes';
import { CustomColor } from '../themes/colors';
import { BreakpointKeyObj } from '../breakpoints';

export type ThemePropsType = ThemeProps<CustomThemeType>;

export type CustomCssPropsType = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  customCss?: FlattenInterpolation<any>;
};

export type AlignCenterPropsType = {
  alignCenter?: boolean;
};

export type IsActivePropsType = {
  isActive?: boolean;
};

export type IsDisabledPropsType = {
  isDisabled?: boolean;
};

export type ColorPropsType = {
  color?: CustomColor;
};

export type FontSizePropsType = {
  fontSize?: BreakpointKeyObj<FontSize>;
};

export type FontWeightPropsType = {
  fontWeight?: string;
};

export type TextAlignPropsType = {
  textAlign?: string;
};

export type PaddingPropsType = {
  padding?: string;
};

export type MarginPropsType = {
  margin?: string;
};

export type BackgroundColorPropsType = {
  backgroundColor?: CustomColor;
};

export type BorderColorPropsType = {
  borderColor?: CustomColor;
};

export type DisplayPropsType = {
  display?: string;
};

export type IsOpenPropsType = {
  isOpen?: boolean;
};

export type HideAtMobilePropsType = {
  hideAtMobile?: boolean;
};
