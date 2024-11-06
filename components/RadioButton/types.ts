import { ComponentPropsWithoutRef } from 'react';
import { TextCustomCssProps } from '@/utils/style/textStyle';
import { CustomColor } from '@/constants/themes/colors';

export type RadioCustomStyle = { activeColor?: CustomColor; };

export type RadioButtonCustomStyle = {
  label?: TextCustomCssProps;
  radio?: RadioCustomStyle;
};

export type RadioButtonDataProps = {
  label: string;
};

export type HTMLRadioButtonProps = ComponentPropsWithoutRef<'input'>;

export type RadioButtonProps = {
  data: RadioButtonDataProps;
  customStyle?: RadioButtonCustomStyle;
} & HTMLRadioButtonProps;
