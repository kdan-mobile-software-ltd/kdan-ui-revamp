import { CustomColor } from '@/constants/themes/colors';
import { ImgData } from '@/constants/types/global';
import { TextCustomCssProps } from '@/utils/style/textStyle';
import { HocHyperlinkData, HyperlinkCustomStyle } from '@/components/Hyperlink/types';

export type EventBar11Data = {
  title: string;
  hyperlink: HocHyperlinkData;
  icon: ImgData;
};

export type EventBar11CustomStyle = {
  backgroundColor?: CustomColor;
  title?: TextCustomCssProps;
  hyperlink?: HyperlinkCustomStyle;
};

export type EventBar11Props = {
  data: EventBar11Data
  customStyle?: EventBar11CustomStyle
};
