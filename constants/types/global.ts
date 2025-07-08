import { ComponentPropsWithoutRef } from 'react';

export type ValueOf<T> = T[keyof T];

export type ImgData = {
  src: string;
  alt: string;
} & ComponentPropsWithoutRef<'img'>;

export type SizeLS = 'large' | 'small';

export type SizeLSProps = { size?: SizeLS };

export type LayoutNumbersOfColumn = {
  numbersOfColumn?: 2 | 3;
};
export type LayoutHideLongerThan = {
  hideLongerThan?: number;
};
export type IsHideToggle = {
  isHideToggle?: boolean;
};
