import { ReactNode } from 'react';
import { CustomColor } from '@/constants/themes/colors';
import { ImgData } from '@/constants/types/global';
import { TextCustomCssProps } from '@/utils/style/textStyle';

export type Modal11CustomStyle = {
  wrapper?: {
    maskBackground?: CustomColor;
    modalBackground?: CustomColor;
  };
  title?: TextCustomCssProps;
  desc?: TextCustomCssProps;
};

export type Modal11Data = {
  title: string;
  desc?: string;
  image?: ImgData;
};

export type Modal11Props = {
  data: Modal11Data
  customStyle?: Modal11CustomStyle;
  children: ReactNode;
};
