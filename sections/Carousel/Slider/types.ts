import { CustomColor } from '@/constants/themes/colors';

export type ArrowCustomStyle = {
  arrowBackgroundColor?: CustomColor;
  arrowSvgColorFilter?: string;
};

export type SliderCustomStyle = {
  isArrow?: boolean;
} & ArrowCustomStyle;

export type SliderProps = {
  customStyle: SliderCustomStyle;
  children: React.ReactNode[];
};
