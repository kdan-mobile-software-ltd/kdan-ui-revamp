import { HocHyperlinkData, HyperlinkStyle } from '@/components/Hyperlink/types';
import { CustomColor } from '@/constants/themes/colors';
import { ImgData } from '@/constants/types/global';
import { TextCustomCssProps } from '@/utils/style/textStyle';

export type ContentItem31Data = {
  title: string;
  desc: string;
  hyperlink?: HocHyperlinkData;
  image: ImgData;
};

export type ContentItem31CustomStyle = {
  wrapper?: {
    borderColor?: CustomColor;
    backgroundColor?: CustomColor;
    contentMinHeight?: string;
  }
  title?: {
    borderLeftColor: CustomColor;
  } & TextCustomCssProps;
  desc?: TextCustomCssProps;
  hyperlink?: HyperlinkStyle;
};
