import { ComponentPropsWithoutRef, ReactNode } from 'react';
import { FlattenSimpleInterpolation } from 'styled-components';
import { TextCustomCssProps } from '@/utils/style/textStyle';

export const HYPERLINK_VARIANTS = {
  noUnderline: 'noUnderline',
  underline: 'underline',
  arrow: 'arrow',
} as const;

export type HyperlinkVariant = keyof typeof HYPERLINK_VARIANTS;

type HTMLHyperlinkProps = Omit<ComponentPropsWithoutRef<'a'>, 'color'>;

export type HyperlinkProps = {
  children: string | ReactNode;
} & HyperlinkCustomStyle & HTMLHyperlinkProps;

export type HyperlinkCustomStyle = {
  variant?: HyperlinkVariant;
  customCss?: FlattenSimpleInterpolation;
} & TextCustomCssProps;

export type HocHyperlinkData = {
  href: string;
  label: string;
} & HTMLHyperlinkProps;
