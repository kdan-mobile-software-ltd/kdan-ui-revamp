import { IsHideToggle, LayoutHideLongerThan, LayoutNumbersOfColumn } from '@/constants/types/global';
import { CardItem11Data, CardItem11Style } from '../Item/CardItem11/types';

export type Card11Data = {
  items: CardItem11Data[];
  toggleText?: {
    open: string;
    close: string;
  }
};

export type Card11CustomStyle = {
  others?: LayoutNumbersOfColumn
  & LayoutHideLongerThan
  & IsHideToggle;
} & CardItem11Style;

export type Card11Props = {
  data: Card11Data;
  customStyle?: Card11CustomStyle;
};
