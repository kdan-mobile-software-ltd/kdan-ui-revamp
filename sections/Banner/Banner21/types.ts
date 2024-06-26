import { CustomColor } from '@/constants/themes/colors';
import { HocHyperlinkData, HyperlinkCustomStyle } from '@/components/Hyperlink/types';
import { ImgData } from '@/constants/types/global';
import { ReactNode } from 'react';

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
  children: ReactNode;
};
