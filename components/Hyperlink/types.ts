import { CustomColor } from '@/constants/themes/colors';

export const VARIANTS = {
  noUnderline: 'noUnderline',
  underline: 'underline',
  arrow: 'arrow',
} as const;

export type Variant = keyof typeof VARIANTS;

export type ComponentProps = {
  variant?: Variant;
  children: string;
  href: string;
  color?: CustomColor;
};
