import { Breakpoints } from '../breakpoints';

export type BreakpointKeyObj<T> = Partial<Record<Breakpoints | 'default', T>>;

export type ValueOf<T> = T[keyof T];

export type ImgData = {
  src: string;
  alt: string;
};
