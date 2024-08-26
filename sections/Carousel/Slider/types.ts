import { CustomColor } from '@/constants/themes/colors';

export type SliderCustomStyle = {
  arrowColor?: CustomColor;
  isWide?: boolean;
  isArrow?: boolean;
};

export type SliderProps = {
  customStyle: SliderCustomStyle;
  children: React.ReactNode[];
};
