import { CustomColor } from '@/constants/themes/colors';
import { HocButtonData, ButtonStyle } from '@/components/Button/types';
import { TextCustomCssProps } from '@/utils/style/textStyle';

export type CtaBanner21Data = {
  title: string;
  desc?: string;
  button1?: HocButtonData;
  button2?: HocButtonData;
};

export type CtaBanner21CustomStyle = {
  background?: {
    color: CustomColor;
  }
  title?: TextCustomCssProps;
  desc?: TextCustomCssProps;
  button1?: ButtonStyle;
  button2?: ButtonStyle;
};

export type CtaBanner21Props = {
  data: CtaBanner21Data;
  customStyle?: CtaBanner21CustomStyle;
};
