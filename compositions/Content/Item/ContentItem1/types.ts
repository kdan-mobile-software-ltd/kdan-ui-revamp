import { HyperlinkStyle } from '@/components/Hyperlink/types';
import { TextCustomCssProps } from '@/utils/style/textStyle';

export type ContentCustomStyle = {
  title?: TextCustomCssProps;
  desc?: TextCustomCssProps;
  hyperlink?: HyperlinkStyle;
};
