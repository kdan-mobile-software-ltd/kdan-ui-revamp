import React from 'react';
import { StyledHyperlink } from './styled';
import { ComponentProps } from './types';

export const Hyperlink: React.FC<ComponentProps> = ({
  variant,
  children,
  href,
  color = 'hyperlink',
  fontSize = { default: 'body3', tablet: 'body5' },
  ...textCustomStyles
}) => (
  <StyledHyperlink
    variant={variant}
    href={href}
    {...{ color, fontSize, ...textCustomStyles }}
  >
    {children}
    {variant === 'arrow' && ' →'}
  </StyledHyperlink>
);
