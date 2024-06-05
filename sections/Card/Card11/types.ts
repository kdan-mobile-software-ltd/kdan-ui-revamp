import { ContentItem1CustomStyle } from '@/sections/Content/Item/ContentItem1/types';
import { LayoutNumbersOfColumn } from '@/constants/types/global';
import { CardItem11Data } from '../Item/CardItem11/types';

export type Card11Data = {
  items: CardItem11Data[];
  toggleText?: {
    open: string;
    close: string;
  }
};

export type Card11CustomStyle = {
  others?: LayoutNumbersOfColumn;
} & ContentItem1CustomStyle;

export type Card11Props = {
  data: Card11Data;
  customStyle?: Card11CustomStyle;
};
