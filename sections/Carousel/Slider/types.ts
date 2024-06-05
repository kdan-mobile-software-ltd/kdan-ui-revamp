import { CustomColor } from '@/constants/themes/colors';

export type SliderCustomStyle = {
  arrowColor?: CustomColor;
};

export type SliderProps = {
  customStyle: SliderCustomStyle;
  children: React.ReactNode[];
};
