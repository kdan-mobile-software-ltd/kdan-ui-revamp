import { ComponentPropsWithoutRef } from 'react';
import { TextCustomCssProps } from '@/utils/style/textStyle';
import { BorderColorPropsType } from '@/constants/types/styled';

export type TextAreaCustomStyle = {
  label?: TextCustomCssProps;
  area?: BorderColorPropsType;
};

export type TextAreaDataProps = {
  label?: string;
  placeholder?: string;
};

export type HTMLTextAreaProps = ComponentPropsWithoutRef<'textarea'>;

export type TextAreaProps = {
  data: TextAreaDataProps;
  customStyle?: TextAreaCustomStyle;
} & HTMLTextAreaProps;
