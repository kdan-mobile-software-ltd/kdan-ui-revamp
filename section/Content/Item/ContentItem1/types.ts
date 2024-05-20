import { HocHyperlinkData, HyperlinkStyle } from '@/components/Hyperlink/types';
import { ImgData } from '@/constants/types/global';
import { TextCustomCssProps } from '@/utils/style/textStyle';

export type ContentCustomStyle = {
  title?: TextCustomCssProps;
  desc?: TextCustomCssProps;
  hyperlink?: HyperlinkStyle;
};

export type Item = {
  title: string;
  desc?: string;
  icon?: ImgData;
  hyperlink?: HocHyperlinkData;
};

export type Props = {
  data: Item;
  customStyle: ContentCustomStyle | undefined;
};
