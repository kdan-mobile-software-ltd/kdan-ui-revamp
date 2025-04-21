import { ComponentPropsWithoutRef } from 'react';
import { TextCustomCssProps } from '@/utils/style/textStyle';
import {
  ArrowSvgColorFilter, BackgroundColorPropsType, BorderColorPropsType, CustomCssPropsType,
} from '@/constants/types/styled';
import { ImgData } from '@/constants/types/global';

export type DropdownCustomStyle = {
  maxHeight?: string;
  openDirection?: DropdownDirection;
} & TextCustomCssProps;

export type SelectCustomStyle = {
  label?: TextCustomCssProps;
  dropdown?: DropdownCustomStyle;
  option?: CustomCssPropsType;
  wrapper?: CustomCssPropsType;
  text?: TextCustomCssProps;
} & BackgroundColorPropsType & BorderColorPropsType & ArrowSvgColorFilter;

export type OptionType = {
  label: string;
  value: string;
};

export type DropdownDirection = 'upward' | 'downward' | 'auto'; // default is `auto`

export type SelectDataProps = {
  label?: string;
  placeholder?: string;
  icon?: ImgData;
  options: OptionType[];
  activeOption: OptionType[];
  inputValue?: string;
  isMultiSelect?: boolean;
  isShowCancelAllOption?: boolean;
  onChange: (option: OptionType) => unknown;
  onInputChange?: (value: string) => unknown;
  isHideSearch?: boolean;
  searchPlaceholder?: string;
};

export type HTMLInputProps = ComponentPropsWithoutRef<'input'>;

export type SelectProps = {
  data: SelectDataProps;
  customStyle?: SelectCustomStyle;
} & HTMLInputProps;
