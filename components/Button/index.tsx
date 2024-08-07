import React from 'react';
import { ButtonProps } from './types';
import { StyledButton, Icon } from './styled';

export const Button: React.FC<ButtonProps> = ({
  icon, children,
  variant, size, corner, customStyle,
  ...htmlProps
}) => (
  <StyledButton
    {...{
      variant, size, corner, customStyle, ...htmlProps,
    }}
  >
    {icon && <Icon size={size} alt={icon.alt} src={icon.src} />}
    <span>{children}</span>
  </StyledButton>
);
