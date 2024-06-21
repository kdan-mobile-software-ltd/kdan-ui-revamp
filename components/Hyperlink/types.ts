import { ComponentPropsWithoutRef, ReactNode } from 'react';
import { FlattenSimpleInterpolation } from 'styled-components';
import { TextCustomCssProps } from '@/utils/style/textStyle';

export const VARIANTS = {
  noUnderline: 'noUnderline',
  underline: 'underline',
  arrow: 'arrow',
} as const;

export type Variant = keyof typeof VARIANTS;

type HTMLAProps = Omit<ComponentPropsWithoutRef<'a'>, 'color'>;

export type ComponentProps = {
  children: string | ReactNode;
} & HyperlinkStyle & HTMLAProps;

export type HyperlinkStyle = {
  variant?: Variant;
  customCss?: FlattenSimpleInterpolation;
} & TextCustomCssProps;

export type HocHyperlinkData = {
  href: string;
  label: string;
} & HTMLAProps;
