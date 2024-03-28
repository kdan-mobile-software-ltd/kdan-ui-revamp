import { HyperlinkStyle } from '@/components/Hyperlink/types';
import { CustomColor } from '@/constants/themes/colors';

export type ContentCustomStyle = {
  title?: {
    color: CustomColor;
  };
  desc?: {
    color: CustomColor;
  };
  hyperlink?: HyperlinkStyle;
};
