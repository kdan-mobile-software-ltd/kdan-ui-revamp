import { HocHyperlinkData, HyperlinkCustomStyle } from '@/components/Hyperlink/types';
import { CustomColor } from '@/constants/themes/colors';
import { ImgData } from '@/constants/types/global';
import { CustomCssPropsType } from '@/constants/types/styled';
import { TextCustomCssProps } from '@/utils/style/textStyle';

export type CardItem23WrapperStyle = {
  borderColor?: CustomColor;
  backgroundColor?: CustomColor;
};

export type CardItem23ImageStyle = { isNoMargin?: boolean };

export type CardItem23Style = {
  wrapper?: CardItem23WrapperStyle;
  title?: TextCustomCssProps;
  desc?: TextCustomCssProps & CustomCssPropsType;
  hyperlink?: HyperlinkCustomStyle;
  image?: CardItem23ImageStyle;
};

export type CardItem23Data = {
  title: string;
  desc: string;
  image: ImgData;
  hyperlink?: HocHyperlinkData;
};

export type CardItem23Props = {
  data: CardItem23Data;
  customStyle?: CardItem23Style;
};
