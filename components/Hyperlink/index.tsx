import React from 'react';
import { StyledHyperlink } from './styled';
import { HyperlinkProps } from './types';

export const Hyperlink: React.FC<HyperlinkProps> = ({
  variant,
  children,
  color = 'hyperlink',
  fontSize = { default: 'body3', tablet: 'body5' },
  padding,
  margin,
  textAlign,
  customCss,
  ...htmlProps
}) => (
  <StyledHyperlink
    {...{
      variant, color, fontSize, padding, margin, textAlign, customCss, ...htmlProps,
    }}
  >
    {children}
    {variant === 'arrow' && ' →'}
  </StyledHyperlink>
);
