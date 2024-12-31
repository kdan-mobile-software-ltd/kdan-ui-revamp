import React, {
  FocusEvent, useEffect, useRef, useState,
} from 'react';
import { css } from 'styled-components';
import { SimpleToggle } from '../private/Toggle/styled';
import { Label } from '../TextField/styled';
import { TextField } from '../TextField';
import { CustomSizeImage } from '../Image/styledImages';
import { Typography } from '../Typography';
import { DropdownDirection, OptionType, SelectProps } from './types';
import {
  Wrapper, Dropdown, Option, InputWrapper,
} from './styled';

const transformToObject = (array: OptionType[]): Record<string, OptionType> => array.reduce((
  object,
  option,
) => ({ ...object, [option.value]: option }), {});

const emptyOption = { label: '', value: '' };

export const Select: React.FC<SelectProps> = ({
  data, customStyle, ...htmlProps
}) => {
  const openDirectionProp = customStyle?.dropdown?.openDirection;
  const [openDirection, setOpenDirection] = useState<DropdownDirection>(openDirectionProp || 'downward');
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [options, setOptions] = useState<OptionType[]>(data.options);
  const [isSearchFinish, setIsSearchFinish] = useState(false);
  const activeOptionsObject = transformToObject(data.activeOption);

  const {
    icon,
    activeOption,
    inputValue,
  } = data;

  useEffect(() => {
    (function handleClearInput() {
      if (!data.isMultiSelect && data.inputValue === '') data.onChange(emptyOption);
    }());
  }, [inputValue]);

  useEffect(() => {
    (function filterOptions() {
      if (data.closeAutocomplete || !data.options || !isOpen || !inputValue) return;
      if (isSearchFinish) {
        setOptions(data.options);
        return;
      }
      const filteredOptions = data.options.filter(
        (option) => option.label?.toLowerCase().includes(inputValue?.toLowerCase()),
      );

      setIsSearchFinish(false);
      setOptions(filteredOptions);
    }());
  }, [inputValue, isOpen]);

  const onChange = (option: OptionType) => () => {
    if (!data.isMultiSelect) setIsOpen(false);
    data.onChange(option);

    if (data.isMultiSelect) data.onInputChange('');

    setIsSearchFinish(true);
  };

  const selectAll = () => {
    const toBeSelect = options.filter((option) => !activeOptionsObject?.[option.value]);
    setIsOpen(false);

    if (!toBeSelect.length) {
      // cancel all
      options.forEach((option) => { data.onChange(option); });
      return;
    }
    // select all
    toBeSelect.forEach((option) => { data.onChange(option); });
  };

  const determineDropdownDirection = () => {
    if (openDirectionProp && openDirectionProp !== 'auto') return;

    if (wrapperRef.current) {
      const rect = wrapperRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const spaceBelow = viewportHeight - rect.bottom;
      const spaceAbove = rect.top;
      // Check if there's more space above or below the Select component
      if (spaceBelow < 180 && spaceAbove > spaceBelow) {
        setOpenDirection('upward'); // Open upward if there's more space above
      } else {
        setOpenDirection('downward'); // Default to downward
      }
    }
  }; // todo: fix this

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
      <Wrapper tabIndex={0} onBlur={closeDropdown} ref={wrapperRef}>
        <InputWrapper onClick={toggleDropdown}>
          {icon?.src && (
          <CustomSizeImage
            {...icon}
            customStyle={{ width: { default: '24px' }, height: { default: '24px' }, margin: '0 0 0 12px' }}
          />
          )}
          { data.isMultiSelect && activeOption?.[0] && (
            <Typography fontSize={{ default: 'button3' }} margin="0 0 0 12px">
              {`${activeOption[0].label}${data.isMultiSelect && activeOption.length > 1 ? `, +${activeOption.length - 1}` : ''}`}
            </Typography>
          )}
          <TextField
            autoComplete="off"
            type="text"
            style={{ border: 0 }}
            customStyle={{
              ...customStyle?.input,
              wrapper: { customCss: css`flex-grow: 1; width: auto;` },
            }}
            data={{ isShowClearButton: true }}
            onChange={(e) => {
              setIsSearchFinish(false);
              data.onInputChange(e.target.value);
            }}
            value={inputValue}
            {...htmlProps}
          />
          <SimpleToggle isOpen={isOpen} />
        </InputWrapper>

        <Dropdown isOpen={isOpen} {...{ ...customStyle?.dropdown, openDirection }}>
          {data.isShowSelectAllOption && (
          <Option
            id="select-all"
            key="select-all"
            value="value"
            onClick={selectAll}
            customCss={css`
              font-weight: bold;
              color: ${({ theme }) => theme.colors.hyperlink};
              text-align: right;
              ${customStyle?.option?.customCss || ''}
            `}
          >
            {activeOption.length === data.options.length ? 'Clear all' : 'Select all'}
          </Option>
          )}
          {options.map((option, index) => {
            const { value, label } = option;
            const isActive = !!activeOptionsObject?.[value];
            return (
              <Option
                id={value}
                key={value}
                isBottom={index === options.length - 1}
                value={value}
                onClick={onChange(option)}
                className={isActive ? 'isActive' : ''}
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
