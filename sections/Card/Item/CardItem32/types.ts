import { HocHyperlinkData } from '@/components/Hyperlink/types';
import { CustomColor } from '@/constants/themes/colors';
import { ImgData } from '@/constants/types/global';
import { TextCustomCssProps } from '@/utils/style/textStyle';
import { BackgroundColorPropsType } from '@/constants/types/styled';

export type CardItem32WrapperStyle = {
  isHighlight?: boolean;
  borderColor?: CustomColor;
  backgroundColor?: CustomColor;
};

export type CardItem32Style = {
  wrapper?: CardItem32WrapperStyle;
  name?: TextCustomCssProps;
  price?: TextCustomCssProps;
  hyperlink?: TextCustomCssProps & BackgroundColorPropsType;
  depicts?: TextCustomCssProps;
};

export type CardItem32Data = {
  name: string;
  image: ImgData;
  desc: string;
  price: string;
  unit: string;
  hyperlink: HocHyperlinkData;
  aux: string;
  depicts: string[];
};

export type CardItem32Props = {
  data: CardItem32Data;
  customStyle?: CardItem32Style;
};
