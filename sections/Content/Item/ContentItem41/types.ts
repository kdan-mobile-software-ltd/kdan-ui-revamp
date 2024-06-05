import { CustomColor } from '@/constants/themes/colors';
import { TextCustomCssProps } from '@/utils/style/textStyle';

export type ContentItem41CustomStyle = {
  title?: TextCustomCssProps;
  desc?: TextCustomCssProps;
  borderColor?: CustomColor;
  backgroundColor?: CustomColor;
  arrowSvgColorFilter?: string;
};

export type ContentItem41Data = {
  title: string;
  desc: string;
};

export type ContentItem41Props = {
  data: ContentItem41Data;
  customStyle?: ContentItem41CustomStyle;
};
