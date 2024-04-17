import { HocHyperlinkData } from '@/components/Hyperlink/types';
import { ImgData } from '@/constants/types/global';
import { ContentCustomStyle } from '../Item/ContentItem1/types';

export type Item = {
  title: string;
  desc?: string;
  icon?: ImgData;
  hyperlink?: HocHyperlinkData;
  image?: ImgData;
};

// export type LayoutNumbersOfColumn = {
//   numbersOfColumn?: 2 | 3;
// };

export type CustomStyle = ContentCustomStyle & {
  hideAtMobile?: boolean;
};

export type ComponentProps = {
  data: {
    items: Item[];
    toggleText?: {
      open: string;
      close: string;
    }
  };
  customStyle?: CustomStyle;
};

export type ItemProps = {
  data: Item;
  customStyle?: CustomStyle;
};
