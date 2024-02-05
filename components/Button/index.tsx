import React from 'react';
import { ButtonProps } from './types';
import { StyledButton, Icon } from './styled';

const Button: React.FC<ButtonProps> = ({ icon, children, ...styleProps }) => (
  <StyledButton {...styleProps}>
    {icon && <Icon size={styleProps.size} alt={icon.alt} src={icon.src} />}
    <span>{children}</span>
  </StyledButton>
);

export default Button;
