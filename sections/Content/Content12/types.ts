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

export type ItemProps = {
  data: Item;
  customStyle?: ContentCustomStyle;
  hideAtMobile: boolean;
};

export type ComponentProps = {
  data: {
    items: Item[];
    toggleText?: {
      open: string;
      close: string;
    }
  };
  customStyle?: ContentCustomStyle;
};
