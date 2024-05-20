import { ContentCustomStyle } from '@/compositions/Content/Item/ContentItem1/types';
import { ImgData } from '@/constants/types/global';
import { CardItem11Data } from '../Item/CardItem11/types';

export type Item = {
  title: string;
  desc?: string;
  icon?: ImgData;
};

export type LayoutNumbersOfColumn = {
  numbersOfColumn?: 2 | 3;
};

export type CustomStyle = {
  others?: LayoutNumbersOfColumn;
} & ContentCustomStyle;

export type ComponentProps = {
  data: {
    items: CardItem11Data[];
    toggleText?: {
      open: string;
      close: string;
    }
  };
  customStyle?: CustomStyle;
};

export type ItemProps = {
  data: Item;
  customStyle: (CustomStyle | undefined) & { hideAtMobile: boolean };
};
