import React from 'react';
import { TextAreaProps } from './types';
import { Label, Area } from './styled';

export const TextArea: React.FC<TextAreaProps> = ({
  data, customStyle, ...htmlProps
}) => (
  <div>
    {data?.label && <Label htmlFor={htmlProps.name} {...customStyle?.label}>{data.label}</Label>}
    <Area
      id={htmlProps.name}
      name={htmlProps.name}
      {...htmlProps}
      {...customStyle?.area}
    />
  </div>
);
