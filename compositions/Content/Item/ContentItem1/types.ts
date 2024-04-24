import { HocHyperlinkData, HyperlinkStyle } from '@/components/Hyperlink/types';
import { TextCustomCssProps } from '@/utils/style/textStyle';

export type ContentCustomStyle = {
  title?: TextCustomCssProps;
  desc?: TextCustomCssProps;
  hyperlink?: HyperlinkStyle;
};

export type Item = {
  title: string;
  desc?: string;
  icon?: ImageData;
  hyperlink?: HocHyperlinkData;
};

export type Props = {
  data: Item;
  customStyle: ContentCustomStyle | undefined;
};
