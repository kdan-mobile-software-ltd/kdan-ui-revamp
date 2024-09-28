import React from 'react';
import { CheckboxProps } from './types';
import { Check, Label } from './styled';

export const Checkbox: React.FC<CheckboxProps> = ({
  data, customStyle, ...htmlProps
}) => (
  <Label
    htmlFor={htmlProps.id}
    fontSize={{ default: 'body5' }}
    isDisabled={htmlProps.disabled}
    {...customStyle?.label}
  >
    <Check
      type="checkbox"
      {...htmlProps} // checked, disabled
      {...customStyle?.check}
    />
    {data.label}
  </Label>
);
