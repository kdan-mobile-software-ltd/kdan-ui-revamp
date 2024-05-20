import { ContentItem41CustomStyle } from '../Item/ContentItem41/types';

export type Item = {
  title: string;
  desc: string;
};

export type LayoutNumbersOfColumn = {
  numbersOfColumn?: 2 | 3;
};

export type CustomStyle = {
  others?: LayoutNumbersOfColumn;
} & ContentItem41CustomStyle;

export type ComponentProps = {
  data: Item[];
  customStyle?: CustomStyle;
};

export type ItemProps = {
  data: Item;
  customStyle?: CustomStyle;
};
