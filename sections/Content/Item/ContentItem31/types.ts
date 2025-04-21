import { HocHyperlinkData, HyperlinkCustomStyle } from '@/components/Hyperlink/types';
import { CustomColor } from '@/constants/themes/colors';
import { ImgData } from '@/constants/types/global';
import { CustomCssPropsType } from '@/constants/types/styled';
import { TextCustomCssProps } from '@/utils/style/textStyle';

export type ContentItem31Data = {
  title: string;
  desc: string;
  hyperlink?: HocHyperlinkData;
  image: ImgData;
};
export type IsTextPositionRightType = { isTextPositionRight?: boolean; };

export type ContentItem31CustomStyle = {
  wrapper?: {
    borderColor?: CustomColor;
    backgroundColor?: CustomColor;
  } & IsTextPositionRightType;
  title?: {
    borderLeftColor: CustomColor;
  } & TextCustomCssProps;
  desc?: TextCustomCssProps & CustomCssPropsType;
  hyperlink?: HyperlinkCustomStyle;
};

export type ContentItem31Props = {
  data: ContentItem31Data;
  customStyle?: ContentItem31CustomStyle;
};
