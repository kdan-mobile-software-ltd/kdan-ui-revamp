import { BreakpointKeyObj } from '@/constants/types/global';
import { ContentCustomStyle } from '../Content/types';

export type Item = {
  title: string;
  desc?: string;
  image?: {
    src: string;
    alt: string;
  };
  hyperlink?: {
    href: string;
    label: string;
  };
};

export type Data = Item[];

export type CustomStyle = {
  image: {
    width: BreakpointKeyObj<string>;
    height: BreakpointKeyObj<string>;
  }
} & ContentCustomStyle;
