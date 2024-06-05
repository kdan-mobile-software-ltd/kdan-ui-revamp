import { CustomColor } from '@/constants/themes/colors';
import { HocButtonData, ButtonStyle } from '@/components/Button/types';
import { TextCustomCssProps } from '@/utils/style/textStyle';

export type CtaBanner22Data = {
  title: string;
  desc?: string;
  button1?: HocButtonData;
  button2?: HocButtonData;
};

export type CtaBanner22CustomStyle = {
  background?: {
    color: CustomColor;
  }
  title?: TextCustomCssProps;
  desc?: TextCustomCssProps;
  button1?: ButtonStyle;
  button2?: ButtonStyle;
};

export type CtaBanner22Props = {
  data: CtaBanner22Data;
  customStyle?: CtaBanner22CustomStyle;
};
