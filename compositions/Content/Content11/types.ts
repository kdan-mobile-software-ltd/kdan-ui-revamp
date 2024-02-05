import { ContentCustomStyle } from '../Content/types';

export type Item = {
  title: string;
  desc?: string;
  icon?: {
    src: string;
    alt: string;
  };
  hyperlink?: {
    href: string;
    label: string;
  };
};

export type LayoutNumberOfRow = {
  numberOfRow?: 2 | 3;
};

export type CustomStyle = {
  others?: LayoutNumberOfRow;
} & ContentCustomStyle;

export type ComponentProps = {
  data: Item[];
  customStyle?: CustomStyle;
};

export type ItemProps = {
  data: Item;
  customStyle: CustomStyle | undefined;
};
