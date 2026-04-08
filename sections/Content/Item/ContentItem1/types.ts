import { HocHyperlinkData, HyperlinkCustomStyle } from '@/components/Hyperlink/types';
import { TypographyProps } from '@/components/Typography';
import { ImgData } from '@/constants/types/global';

export type ContentItem1CustomStyle = {
  title?: TypographyProps;
  desc?: TypographyProps;
  hyperlink?: HyperlinkCustomStyle;
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
