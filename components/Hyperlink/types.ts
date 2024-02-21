import { TextCustomCssProps } from '@/utils/style/textStyle';

export const VARIANTS = {
  noUnderline: 'noUnderline',
  underline: 'underline',
  arrow: 'arrow',
} as const;

export type Variant = keyof typeof VARIANTS;

export type ComponentProps = {
  children: string;
  href: string;
} & HyperlinkStyle;

export type HyperlinkStyle = {
  variant?: Variant;
} & TextCustomCssProps;

export type HocHyperlinkData = {
  href: string;
  label: string;
};
