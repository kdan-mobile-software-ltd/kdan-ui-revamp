import { CustomColor } from '@/constants/themes/colors';
import { TextCustomCssProps } from '@/utils/style/textStyle';
import { ReactNode } from 'react';

export type CtaBanner11Data = {
  title: string;
};

export type CtaBanner11CustomStyle = {
  background?: {
    color: CustomColor;
  }
  title?: TextCustomCssProps;
};

export type CtaBanner11Props = {
  data:CtaBanner11Data;
  customStyle?: CtaBanner11CustomStyle;
  children: ReactNode;
};
