import React, {
  FocusEvent, useEffect, useRef, useState,
} from 'react';
import { css } from 'styled-components';
import { DropdownDirection, OptionType, SelectProps } from './types';
import {
  Wrapper, Dropdown, Option, InputWrapper,
} from './styled';
import { Label } from '../TextField/styled';
import { TextField } from '../TextField';
import { SimpleToggle } from '../private/Toggle/styled';
import { CustomSizeImage } from '../Image/styledImages';

export const Select: React.FC<SelectProps> = ({
  data, customStyle, ...htmlProps
}) => {
  const openDirectionProp = customStyle?.dropdown?.openDirection;
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [openDirection, setOpenDirection] = useState<DropdownDirection>(openDirectionProp || 'downward');
  const [isOpen, setIsOpen] = useState(false);
  const [options, setOptions] = useState<OptionType[]>(data.options);

  const {
    icon,
    activeOption,
    inputValue,
    onChange,
    onInputChange,
  } = data;

  useEffect(() => {
    setIsOpen(false); // close dropdown after select a new option
  }, [activeOption.label]);

  useEffect(() => {
    if (!data.closeAutocomplete && data.options) {
      const filteredOptions = data.options.filter(
        (option) => option.label.toLowerCase().includes(inputValue.toLowerCase()),
      );

      setOptions(filteredOptions);
    }
  }, [inputValue]);

  const determineDropdownDirection = () => {
    if (!openDirectionProp || openDirectionProp !== 'auto') return;

    if (wrapperRef.current) {
      const rect = wrapperRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const spaceBelow = viewportHeight - rect.bottom;
      const spaceAbove = rect.top;

      // Check if there's more space above or below the Select component
      if (spaceBelow < 220 && spaceAbove > spaceBelow) {
        setOpenDirection('upward'); // Open upward if there's more space above
      } else {
        setOpenDirection('downward'); // Default to downward
      }
    }
  };

  const toggleDropdown = () => {
    if (!isOpen) {
      determineDropdownDirection(); // Calculate dropdown direction before opening
    }
    setIsOpen((current) => !current);
  };

  const closeDropdown = (e: FocusEvent<HTMLDivElement>) => {
    const currentTarget = e.currentTarget as HTMLElement;
    const relatedTarget = e.relatedTarget as HTMLElement;
    if (currentTarget?.contains(relatedTarget)) return;

    setIsOpen(false);
  };

  return (
    <>
      {data?.label && <Label {...customStyle?.label}>{data.label}</Label>}
      <Wrapper tabIndex={0} onBlur={closeDropdown}>
        <InputWrapper onClick={toggleDropdown}>
          {icon?.src && (
          <CustomSizeImage
            {...icon}
            customStyle={{ width: { default: '24px' }, height: { default: '24px' } }}
          />
          )}
          <TextField
            autoComplete="off"
            type="text"
            id={htmlProps.name}
            name={htmlProps.name}
            style={{ border: 0 }}
            customStyle={{
              ...customStyle?.input,
              wrapper: { customCss: css`flex-grow: 1;` },
            }}
            data={{ isShowClearButton: true }}
            onChange={onInputChange}
            value={inputValue}
          />
          <SimpleToggle isOpen={isOpen} />
        </InputWrapper>

        <Dropdown isOpen={isOpen} {...{ ...customStyle?.dropdown, openDirection }}>
          {options.map((option) => {
            const value = option.value || option.label;
            const { label } = option;

            return (
              <Option
                id={value}
                key={value}
                value={value}
                onClick={(e) => {
                  e.stopPropagation();
                  onChange({ value, label });
                }}
                className={value === activeOption.value ? 'isActive' : ''}
                customCss={customStyle?.option?.customCss}
              >
                {label}
              </Option>
            );
          })}
        </Dropdown>
      </Wrapper>
    </>
  );
};
