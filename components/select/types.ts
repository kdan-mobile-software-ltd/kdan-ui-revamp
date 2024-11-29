import { ChangeEvent, ComponentPropsWithoutRef } from 'react';
import { TextCustomCssProps } from '@/utils/style/textStyle';
import { BorderColorPropsType, CustomCssPropsType } from '@/constants/types/styled';
import { ImgData } from '@/constants/types/global';

export type DropdownCustomStyle = {
  maxHeight?: string;
  openDirection?: DropdownDirection;
};

export type SelectCustomStyle = {
  label?: TextCustomCssProps;
  input?: BorderColorPropsType;
  dropdown?: DropdownCustomStyle;
  option?: CustomCssPropsType;
};

export type OptionType = {
  label: string;
  value?: string;
};

export type DropdownDirection = 'upward' | 'downward' | 'auto'; // default is `auto`

export type SelectDataProps = {
  label?: string;
  icon?: ImgData;
  options: OptionType[];
  activeOption: OptionType;
  inputValue: string;
  onChange: (option: OptionType) => unknown;
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => unknown;
  closeAutocomplete?: boolean;
};

export type HTMLInputProps = ComponentPropsWithoutRef<'input'>;

export type SelectProps = {
  data: SelectDataProps;
  customStyle?: SelectCustomStyle;
} & HTMLInputProps;
