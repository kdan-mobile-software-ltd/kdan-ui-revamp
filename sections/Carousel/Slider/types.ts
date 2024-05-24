import { CustomColor } from '@/constants/themes/colors';

export type SliderCustomStyle = {
  arrowColor?: CustomColor;
};

export type ComponentProps = {
  customStyle: SliderCustomStyle;
  children: React.ReactNode[];
};
