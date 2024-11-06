import { ComponentPropsWithoutRef } from 'react';
import { TextCustomCssProps } from '@/utils/style/textStyle';
import { CustomColor } from '@/constants/themes/colors';

export type CheckCustomStyle = { activeColor?: CustomColor; };

export type CheckboxCustomStyle = {
  label?: TextCustomCssProps;
  check?: CheckCustomStyle;
};

export type CheckboxDataProps = {
  label: string;
};

export type HTMLCheckboxProps = ComponentPropsWithoutRef<'input'>;

export type CheckboxProps = {
  data: CheckboxDataProps;
  customStyle?: CheckboxCustomStyle;
} & HTMLCheckboxProps;
