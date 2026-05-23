import { CustomColor } from '@/constants/themes/colors';
import { HocHyperlinkData, HyperlinkCustomStyle } from '@/components/Hyperlink/types';
import { ImgData } from '@/constants/types/global';
import { CustomImageSize } from '@/components/Image/styledImages';
import { ReactNode } from 'react';
import { TitleTag, DescTag } from '../tagGuards';

export type Banner11Data = {
  title: string;
  desc?: string;
  hyperlink?: HocHyperlinkData;
  image: ImgData;
};
export type Banner11CustomStyle = {
  title?: {
    color: CustomColor;
  };
  desc?: {
    color: CustomColor;
  };
  hyperlink?: HyperlinkCustomStyle;
  image?: CustomImageSize;
};
export type Banner11CustomTag = {
  title?: TitleTag;
  desc?: DescTag;
};

export type Banner11Props = {
  data: Banner11Data;
  customStyle?: Banner11CustomStyle;
  customTag?: Banner11CustomTag;
  children: ReactNode;
};
