import { CustomColor } from '@/constants/themes/colors';
import { ImgData } from '@/constants/types/global';
import { IsDisabledPropsType } from '@/constants/types/styled';

export type Variant = 'filled' | 'outlined' | 'text';
export type Size = 'large' | 'small';
export type Corner = 'round' | 'square';

export type ButtonStyle = {
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
  icon?: ImgData;
  children: string;
};

export type HocButtonData = {
  icon?: ImgData;
  text: string;
};

export type ButtonProps = ButtonDataProps & ButtonStyle;
