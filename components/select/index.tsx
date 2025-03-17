import React, {
  FocusEvent, useEffect, useRef, useState,
} from 'react';
import { css } from 'styled-components';
import { HOST } from '@/constants/config';
import { SimpleToggle } from '../private/Toggle/styled';
import { Label } from '../TextField/styled';
import { TextField } from '../TextField';
import { CustomSizeImage } from '../Image/styledImages';
import { Typography } from '../Typography';
import { DropdownDirection, OptionType, SelectProps } from './types';
import {
  Wrapper, Dropdown, Option, SelectionWrapper,
  ToggleAllWrapper,
  SearchWrapper,
  SearchIcon,
  CancelAllButton,
} from './styled';

const transformToObject = (array: OptionType[]): Record<string, OptionType> => array.reduce((
  object,
  option,
) => ({ ...object, [option.value]: option }), {});

export const Select: React.FC<SelectProps> = ({
  data, customStyle, ...htmlProps
}) => {
  const openDirectionProp = customStyle?.dropdown?.openDirection;
  const [openDirection, setOpenDirection] = useState<DropdownDirection>(openDirectionProp || 'downward');
  const wrapperRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLUListElement>(null);
  const cancelBtnRef = useRef<HTMLButtonElement>(null);
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
    (function filterOptions() {
      if (data.isHideAutocomplete || !data.options || !isOpen) return;
      if (isSearchFinish) {
        setOptions(data.options);
        return;
      }

      const filteredOptions = inputValue ? data.options.filter(
        (option) => option.label?.toLowerCase().includes(inputValue?.toLowerCase()),
      ) : data.options;

      setIsSearchFinish(false);
      setOptions(filteredOptions);
    }());
  }, [inputValue, isOpen]);

  const onOptionChange = (option: OptionType) => () => {
    if (!data.isMultiSelect) setIsOpen(false);
    data.onChange(option);
    data.onInputChange('');
    setIsSearchFinish(true);
  };

  const cancelAllOptions = (e) => {
    const toBeCancel = options.filter((option) => Boolean(activeOptionsObject?.[option.value]));
    toBeCancel.forEach((option) => { data.onChange(option); });
    e.stopPropagation();
  };

  const determineDropdownDirection = () => {
    if (openDirectionProp && openDirectionProp !== 'auto') return;

    if (wrapperRef.current) {
      const dropdownRect = dropdownRef?.current?.getBoundingClientRect();
      const rect = wrapperRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const spaceBelow = viewportHeight - rect.bottom;
      const spaceAbove = rect.top;

      // Check if there's more space above or below the Select component
      if (spaceBelow < (dropdownRect?.height || 220) && spaceAbove > spaceBelow) {
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

    if (currentTarget?.contains(relatedTarget)
      && !relatedTarget?.isSameNode(cancelBtnRef.current)) return;

    setIsOpen(false);
  };

  return (
    <>
      {!!data?.label && <Label {...customStyle?.label}>{data.label}</Label>}
      <Wrapper tabIndex={0} onBlur={closeDropdown} ref={wrapperRef}>
        <SelectionWrapper onClick={toggleDropdown}>
          {icon?.src && (
          <CustomSizeImage
            {...icon}
            customStyle={{ width: { default: '24px' }, height: { default: '24px' }, margin: '0 0 0 12px' }}
          />
          )}
          <Typography fontSize={{ default: 'button3' }} margin="0 0 0 12px" style={{ width: '100%' }}>
            {!activeOption[0]?.label
              ? ''
              : `${activeOption[0]?.label}${data.isMultiSelect && activeOption.length > 1 ? `, +${activeOption.length - 1}` : ''}`}
          </Typography>

          {data.isShowCancelAllOption && !!activeOption.length && (
            <CancelAllButton type="button" onClick={cancelAllOptions} disabled={htmlProps?.disabled} ref={cancelBtnRef} />
          )}

          <SimpleToggle isOpen={isOpen} />
        </SelectionWrapper>

        <Dropdown
          isOpen={isOpen}
          {...{ ...customStyle?.dropdown, openDirection, ref: dropdownRef }}
        >
          {(data.isShowCancelAllOption || !data.isHideAutocomplete) && (
          <ToggleAllWrapper
            id="toggle-all"
            key="toggle-all"
            customCss={customStyle?.option?.customCss}
          >
            {!data.isHideAutocomplete && (
              <SearchWrapper>
                <SearchIcon
                  src={`${HOST}/assets/icon/search.svg`}
                  alt="search-img"
                />
                <TextField
                  autoComplete="off"
                  type="text"
                  customStyle={{
                    ...customStyle?.input,
                    wrapper: {
                      customCss: css` flex-grow: 1; width: auto;`,
                    },
                    input: {
                      borderColor: 'transparent',
                    },
                  }}
                  data={{ isShowClearButton: true }}
                  onChange={(e) => {
                    setIsSearchFinish(false);
                    data.onInputChange(e.target.value);
                  }}
                  value={inputValue}
                  {...htmlProps}
                />
              </SearchWrapper>
            )}
          </ToggleAllWrapper>
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
                onClick={onOptionChange(option)}
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
