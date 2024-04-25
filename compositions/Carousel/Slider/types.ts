import { BreakpointKeyObj } from '@/constants/breakpoints';
import { CustomColor } from '@/constants/themes/colors';

export type SliderCustomStyle = {
  arrowColor?: CustomColor;
};

export type CustomStyle = {
  slider: SliderCustomStyle;
};

export type Sizes = BreakpointKeyObj<{ width: string; height: string }>;

export type ComponentProps = {
  dataLength: number;
  currentIndex: number;
  customStyle?: CustomStyle;
  sizes?: Sizes;
  children: React.ReactNode;
};

// export type ItemProps = {
//   data: Item;
//   customStyle?: CustomStyle;
// };
