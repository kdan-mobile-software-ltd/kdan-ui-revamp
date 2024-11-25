import React, { useRef, useState } from 'react';
import { TextFieldProps } from './types';
import {
  Label, ClearButton, Wrapper, Input,
} from './styled';

export const TextField: React.FC<TextFieldProps> = ({
  data, customStyle, ...htmlProps
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [hasValue, setHasValue] = useState(false);

  const onClear = () => {
    if (inputRef?.current?.value) {
      inputRef.current.value = '';
      setHasValue(false);
    }
  };

  return (
    <Wrapper>
      {data?.label && <Label htmlFor={htmlProps.name} {...customStyle?.label}>{data.label}</Label>}
      <Input
        type="text"
        id={htmlProps.name}
        name={htmlProps.name}
        {...htmlProps}
        {...customStyle?.input}
        ref={inputRef}
        onChange={(e) => {
          htmlProps?.onChange?.(e);
          setHasValue(!!e.target.value);
        }}
      />
      {data.isShowClearButton && hasValue && (
        <ClearButton
          disabled={htmlProps?.disabled}
          type="button"
          onClick={onClear}
        />
      )}
    </Wrapper>
  );
};
