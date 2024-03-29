import { FontSize } from '../fonts';
import { CustomThemeType } from '../themes';
import { CustomColor } from '../themes/colors';
import { BreakpointKeyObj } from '../breakpoints';

export type ThemePropsType = {
  theme: CustomThemeType;
};

export type AlignCenterPropsType = {
  alignCenter?: boolean;
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
