import { ContentCustomStyle, Item } from '../Item/ContentItem1/types';

export type LayoutNumbersOfColumn = {
  numbersOfColumn?: 2 | 3;
};

export type CustomStyle = {
  others?: LayoutNumbersOfColumn;
} & ContentCustomStyle;

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
  customStyle: (CustomStyle | undefined) & { hideAtMobile: boolean };
};
