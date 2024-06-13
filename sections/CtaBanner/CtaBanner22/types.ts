import { CustomColor } from '@/constants/themes/colors';
import { TextCustomCssProps } from '@/utils/style/textStyle';
import { ReactNode } from 'react';

export type CtaBanner22Data = {
  title: string;
  desc?: string;
};

export type CtaBanner22CustomStyle = {
  background?: {
    color: CustomColor;
  }
  title?: TextCustomCssProps;
  desc?: TextCustomCssProps;
};

export type CtaBanner22Props = {
  data: CtaBanner22Data;
  customStyle?: CtaBanner22CustomStyle;
  children: ReactNode;
};
