import { ComponentPropsWithoutRef } from 'react';
import { TextCustomCssProps } from '@/utils/style/textStyle';
import { BorderColorPropsType } from '@/constants/types/styled';

export type TextFieldCustomStyle = {
  label?: TextCustomCssProps;
  input?: BorderColorPropsType;
};

export type TextFieldDataProps = {
  label?: string;
  isShowClearButton?: boolean;
};

export type HTMLTextFieldProps = ComponentPropsWithoutRef<'input'>;

export type TextFieldProps = {
  data: TextFieldDataProps;
  customStyle?: TextFieldCustomStyle;
} & HTMLTextFieldProps;
