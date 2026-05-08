import { CustomColor } from '@/constants/themes/colors';
import { HocHyperlinkData, HyperlinkCustomStyle } from '@/components/Hyperlink/types';
import { ImgData } from '@/constants/types/global';
import { ReactNode } from 'react';

export type Banner21CustomTag = {
  title?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
  desc?: 'p' | 'span';
};

export type Banner21CustomStyle = {
  title?: {
    color: CustomColor;
  };
  desc?: {
    color: CustomColor;
  };
  hyperlink?: HyperlinkCustomStyle;
};

export type Banner21Data = {
  title: string;
  desc?: string;
  hyperlink?: HocHyperlinkData;
  image: ImgData;
};

export type Banner21Props = {
  data: Banner21Data;
  customStyle?: Banner21CustomStyle;
  customTag?: Banner21CustomTag;
  children: ReactNode;
};
