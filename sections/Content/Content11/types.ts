import { LayoutHideLongerThan, LayoutNumbersOfColumn } from '@/constants/types/global';
import { ContentItem1CustomStyle, ContentItem1Data } from '../Item/ContentItem1/types';

export type Content11CustomStyle = {
  others?: LayoutNumbersOfColumn & LayoutHideLongerThan;
} & ContentItem1CustomStyle;

export type Content11Data = {
  items: ContentItem1Data[];
  toggleText?: {
    open: string;
    close: string;
  }
};

export type Content11Props = {
  data: Content11Data;
  customStyle?: Content11CustomStyle;
};

export type ContentItem11ItemProps = {
  data: ContentItem1Data;
  customStyle: (Content11CustomStyle | undefined) & { hideAtMobile: boolean };
};
