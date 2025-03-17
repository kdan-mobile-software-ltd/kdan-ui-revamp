import React from 'react';
import { TextFieldProps } from './types';
import {
  Label, ClearButton, Wrapper, Input,
} from './styled';

export const TextField: React.FC<TextFieldProps> = ({
  data, customStyle, ...htmlProps
}) => {
  const hasValue = !!htmlProps.value;

  const onClear = () => {
    if (hasValue) {
      htmlProps?.onChange?.({ target: { value: '' } } as React.ChangeEvent<HTMLInputElement>);
    }
  };

  return (
    <Wrapper customCss={customStyle?.wrapper?.customCss}>
      {data?.label && <Label htmlFor={htmlProps.name} {...customStyle?.label}>{data.label}</Label>}
      <Input
        type="text"
        id={htmlProps.name}
        name={htmlProps.name}
        {...htmlProps} // value
        {...customStyle?.input}
        onChange={htmlProps?.onChange}
      />
      {data?.isShowClearButton && hasValue && (
        <ClearButton
          disabled={htmlProps?.disabled}
          type="button"
          onClick={onClear}
        />
      )}
    </Wrapper>
  );
};
