import React from 'react';
import { RadioButtonProps } from './types';
import { Radio, Label } from './styled';

export const RadioButton: React.FC<RadioButtonProps> = ({
  data, customStyle, ...htmlProps
}) => (
  <Label
    htmlFor={htmlProps.id}
    fontSize={{ default: 'body5' }}
    isDisabled={htmlProps.disabled}
    {...customStyle?.label}
  >
    <Radio
      type="radio"
      {...htmlProps} // checked, disabled
      {...customStyle?.radio}
    />
    {data.label}
  </Label>
);
