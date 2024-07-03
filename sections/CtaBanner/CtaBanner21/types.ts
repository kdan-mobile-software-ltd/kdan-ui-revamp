import { CustomColor } from '@/constants/themes/colors';
import { TextCustomCssProps } from '@/utils/style/textStyle';
import { ReactNode } from 'react';

export type CtaBanner21Data = {
  title: string;
  desc?: string;
};

export type CtaBanner21CustomStyle = {
  background?: {
    color: CustomColor;
  }
  title?: TextCustomCssProps;
  desc?: TextCustomCssProps;
};

export type CtaBanner21Props = {
  data: CtaBanner21Data;
  customStyle?: CtaBanner21CustomStyle;
  children: ReactNode;
};
