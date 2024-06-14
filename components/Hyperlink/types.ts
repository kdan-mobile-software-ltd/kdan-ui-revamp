import { TextCustomCssProps } from '@/utils/style/textStyle';
import { ComponentPropsWithoutRef, ReactNode } from 'react';

export const VARIANTS = {
  noUnderline: 'noUnderline',
  underline: 'underline',
  arrow: 'arrow',
} as const;

export type Variant = keyof typeof VARIANTS;

export type ComponentProps = {
  children: string | ReactNode;
  href: string;
} & HyperlinkStyle & Pick<ComponentPropsWithoutRef<'a'>, 'target' | 'id'>;

export type HyperlinkStyle = {
  variant?: Variant;
} & TextCustomCssProps;

export type HocHyperlinkData = {
  href: string;
  label: string;
} & Pick<ComponentPropsWithoutRef<'a'>, 'target' | 'id'>;
