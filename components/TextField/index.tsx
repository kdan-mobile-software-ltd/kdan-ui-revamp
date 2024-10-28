import React, { useState } from 'react';
import { TextFieldProps } from './types';
import {
  Label, ClearButton, Wrapper, Input,
} from './styled';

export const TextField: React.FC<TextFieldProps> = ({
  data, customStyle, ...htmlProps
}) => {
  const [value, setValue] = useState(htmlProps.defaultValue);
  const onClear = () => {
    setValue('');
  };

  return (
    <Wrapper>
      {data?.label && <Label htmlFor={htmlProps.name} {...customStyle?.label}>{data.label}</Label>}
      <Input
        type="text"
        id={htmlProps.name}
        name={htmlProps.name}
        value={value}
        onChange={(e) => { setValue(e.target.value); }}
        {...htmlProps}
        {...customStyle?.input}
      />
      <ClearButton
        className={value ? 'isActive' : ''}
        disabled={htmlProps?.disabled}
        type="button"
        onClick={onClear}
      />
    </Wrapper>
  );
};
