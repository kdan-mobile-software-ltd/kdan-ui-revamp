import { HocHyperlinkData } from '@/components/Hyperlink/types';
import { ImgData } from '@/constants/types/global';
import { ContentCustomStyle } from '../Content/types';

export type Item = {
  title: string;
  desc?: string;
  icon?: ImgData;
  hyperlink?: HocHyperlinkData;
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
