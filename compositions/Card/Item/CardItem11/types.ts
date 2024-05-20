import { HocHyperlinkData } from '@/components/Hyperlink/types';
import { CustomColor } from '@/constants/themes/colors';
import { ImgData } from '@/constants/types/global';
import { TextCustomCssProps } from '@/utils/style/textStyle';

export type CardItem11WrapperStyle = {
  isNoHoverShadow?: boolean;
  isNoBorder?: boolean;
  borderColor?: CustomColor;
  backgroundColor?: CustomColor;
};

export type CardItem11Style = {
  wrapper?: CardItem11WrapperStyle;
  title?: TextCustomCssProps;
  desc?: TextCustomCssProps;
};

export type CardItem11Data = {
  title: string;
  desc: string;
  icon: ImgData;
  hyperlink?: HocHyperlinkData;
};

export type CardItem11Props = {
  data: CardItem11Data;
  customStyle?: CardItem11Style;
};
