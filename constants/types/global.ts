import { ComponentPropsWithoutRef } from 'react';

export type ValueOf<T> = T[keyof T];

export type ImgData = {
  src: string;
  alt: string;
} & Pick<ComponentPropsWithoutRef<'img'>, 'id' >;

export type SizeLS = 'large' | 'small';

export type SizeLSProps = { size?: SizeLS };

export type LayoutNumbersOfColumn = {
  numbersOfColumn?: 2 | 3;
};
