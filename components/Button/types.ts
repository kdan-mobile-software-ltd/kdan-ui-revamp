import { CustomColor } from '@/constants/themes/colors';
import { IsDisabledPropsType } from '@/constants/types/styled';

export type Variant = 'filled' | 'outlined' | 'text';
export type Size = 'large' | 'small';
export type Corner = 'round' | 'square';

export type ButtonStyleProps = {
  variant?: Variant; // default is `filled`
  size?: Size; // default is `large`
  corner?: Corner; // default is `round`
  customStyle?: {
    color?: CustomColor;
    backgroundColor?: CustomColor;
    borderColor?: CustomColor;
    hoverColor?: CustomColor;
    hoverBackgroundColor?: CustomColor;
    hoverBorderColor?: CustomColor;
  }
} & IsDisabledPropsType;

export type ButtonDataProps = {
  icon?: {
    src: string;
    alt: string;
  };
  children: string;
};

export type HocButtonDataProps = {
  icon?: {
    src: string;
    alt: string;
  };
  text: string;
};

export type ButtonProps = ButtonDataProps & ButtonStyleProps;
