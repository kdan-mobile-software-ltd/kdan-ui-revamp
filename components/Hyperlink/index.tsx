import React from 'react';
import { StyledHyperlink } from './styled';
import { ComponentProps } from './types';

export const Hyperlink: React.FC<ComponentProps> = ({
  variant, children, href, color,
}) => (
  <StyledHyperlink variant={variant} href={href} color={color}>
    {children}
    {variant === 'arrow' && ' →'}
  </StyledHyperlink>
);
