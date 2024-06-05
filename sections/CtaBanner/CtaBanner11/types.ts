import { CustomColor } from '@/constants/themes/colors';
import { HocButtonData, ButtonStyle } from '@/components/Button/types';
import { TextCustomCssProps } from '@/utils/style/textStyle';

export type CtaBanner11Data = {
  title: string;
  button1?: HocButtonData;
  button2?: HocButtonData;
};

export type CtaBanner11CustomStyle = {
  background?: {
    color: CustomColor;
  }
  title?: TextCustomCssProps;
  button1?: ButtonStyle;
  button2?: ButtonStyle;
};

export type CtaBanner11Props = {
  data:CtaBanner11Data
  customStyle?: CtaBanner11CustomStyle
};
