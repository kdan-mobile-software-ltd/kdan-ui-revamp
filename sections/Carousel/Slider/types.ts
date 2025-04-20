import { BreakpointKeyObj } from '@/constants/breakpoints';
import { CustomColor } from '@/constants/themes/colors';

export type ArrowCustomStyle = {
  arrowBackgroundColor?: CustomColor;
  arrowSvgColorFilter?: string;
};

export type HeightStyle = { height?: BreakpointKeyObj<string> };

export type SliderCustomStyle = {
  isArrow?: boolean;
} & HeightStyle & ArrowCustomStyle;

export type SliderProps = {
  customStyle: SliderCustomStyle;
  children: React.ReactNode[];
};
