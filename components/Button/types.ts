import { ComponentPropsWithoutRef, ReactNode } from 'react';
import { ImgData, SizeLS } from '@/constants/types/global';
import { CustomCssPropsType } from '@/constants/types/styled';

export type ButtonVariant = 'filled' | 'outlined' | 'text';
export type Corner = 'round' | 'square';

export type ButtonCustomStyle = {
  variant?: ButtonVariant; // default is `filled`
  size?: SizeLS; // default is `large`
  corner?: Corner; // default is `round`
  customStyle?: {
    maxWidth?: string;
  } & CustomCssPropsType;
};

export type ButtonDataProps = {
  icon?: ImgData;
  children: ReactNode;
};

export type HTMLButtonProps = ComponentPropsWithoutRef<'button'>; // https://github.com/styled-components/styled-components/issues/3191#issuecomment-655229877

export type HocButtonData = {
  icon?: ImgData;
  text: string;
} & HTMLButtonProps;

export type ButtonProps = ButtonDataProps
& ButtonCustomStyle
& HTMLButtonProps;
