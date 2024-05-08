import { BreakpointKeyObj } from '@/constants/breakpoints';
import { CustomColor } from '@/constants/themes/colors';

export type SliderCustomStyle = {
  arrowColor?: CustomColor;
  sizes: Sizes;
};

export type Sizes = BreakpointKeyObj<{ width: string; height: string; groupSize?: number }>;

export type ComponentProps = {
  dataLength: number;
  currentIndex?: number;
  customStyle: SliderCustomStyle;
  children: React.ReactNode;
};
