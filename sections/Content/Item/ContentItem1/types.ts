import { HocHyperlinkData, HyperlinkStyle } from '@/components/Hyperlink/types';
import { ImgData } from '@/constants/types/global';
import { TextCustomCssProps } from '@/utils/style/textStyle';

export type ContentItem1CustomStyle = {
  title?: TextCustomCssProps;
  desc?: TextCustomCssProps;
  hyperlink?: HyperlinkStyle;
};

export type ContentItem1Data = {
  title: string;
  desc?: string;
  icon?: ImgData;
  hyperlink?: HocHyperlinkData;
};

export type ContentItem1Props = {
  data: ContentItem1Data;
  customStyle: ContentItem1CustomStyle | undefined;
};
