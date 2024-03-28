import { HocHyperlinkData } from '@/components/Hyperlink/types';
import { ImgData } from '@/constants/types/global';
import { ContentCustomStyle } from '../Content/types';

export type Item = {
  title: string;
  desc?: string;
  icon?: ImgData;
  hyperlink?: HocHyperlinkData;
};

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
