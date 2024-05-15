import { HocHyperlinkData } from '@/components/Hyperlink/types';
import { CustomColor } from '@/constants/themes/colors';
import { ImgData, SizeLS } from '@/constants/types/global';
import { TextCustomCssProps } from '@/utils/style/textStyle';

export type CardItem41WrapperStyle = {
  borderColor?: CustomColor;
  backgroundColor?: CustomColor;
  height?: {
    largeSize?: string;
    default?: string;
    tablet?: string;
  }
};

export type CardItem41Style = {
  wrapper?: CardItem41WrapperStyle;
  desc?: TextCustomCssProps;
  userTitle?: TextCustomCssProps;
  hyperlink?: TextCustomCssProps;
  size?: SizeLS; // default is `small`
};

export type CardItem41Data = {
  desc: string;
  userTitle: string;
  image: ImgData;
  hyperlink?: HocHyperlinkData;
};

export type CardItem41Props = {
  data: CardItem41Data;
  customStyle?: CardItem41Style;
};
