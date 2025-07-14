import { HocHyperlinkData } from '@/components/Hyperlink/types';
import { ImgData, LayoutHideLongerThan } from '@/constants/types/global';
import { ContentItem1CustomStyle } from '../Item/ContentItem1/types';

export type Content12Item = {
  title: string;
  desc?: string;
  hyperlink?: HocHyperlinkData;
  image?: ImgData;
};

export type Content12ItemProps = {
  data: Content12Item;
  customStyle?: ContentItem1CustomStyle;
  hideAtMobile: boolean;
};

export type Content12Data = {
  items: Content12Item[];
  toggleText?: {
    open: string;
    close: string;
  }
};

export type Content12CustomStyle = ContentItem1CustomStyle & { others?: LayoutHideLongerThan; };

export type Content12Props = {
  data: Content12Data;
  customStyle?: Content12CustomStyle;
};
