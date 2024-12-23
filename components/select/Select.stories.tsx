import React, { ChangeEvent, useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { css } from 'styled-components';
import { Select } from './index';
import { OptionType } from './types';
import { Typography } from '../Typography';

const meta = {
  title: 'Components/Select',
  component: Select,
  parameters: {
    layout: 'centered',
    docs: { description: { component: '使用方式皆為 Control Component。' } },
  },
  tags: ['autodocs'],
  argTypes: {
    id: { control: 'text' },
    name: { control: 'text' },
    data: { control: 'object' },
    customStyle: { control: 'object' },
  },
} as Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Example1: Story = {
  render: () => {
    const emptyOption = { label: '', value: '' };
    const defaultOption = '';
    const [activeOption, setActiveOption] = useState<OptionType>(
      defaultOption || emptyOption,
    );
    const [inputValue, setInputValue] = useState<string>(activeOption.label);

    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
    };
    const selectNewOption = (option: OptionType) => {
      setInputValue(option.label);
      setActiveOption(option);
    };

    return (
      <>
        <Typography fontSize={{ default: 'body2' }} fontWeight="700">
          selectedOption:
        </Typography>
        {JSON.stringify(activeOption)}

        <Typography fontSize={{ default: 'body2' }} fontWeight="700" margin="5px 0 0">
          inputValue:
        </Typography>
        {inputValue}

        <hr />
        <Select {...{
          id: 'id-1',
          name: 'name-1',
          placeholder: 'Placeholder',
          data: {
            label: 'Label',
            options: [
              { label: 'kdan1', value: '1' },
              { label: 'kdan2', value: '2' },
              { label: 'kdan3', value: '3' },
              { label: 'kdan4', value: '4' },
              { label: 'kdan5', value: '5' },
              { label: 'kdan6', value: '6' },
            ],
            activeOption,
            inputValue,
            onChange: selectNewOption,
            onInputChange,
          },
          customStyle: {
            label: { color: 'gray800' },
            option: {
              customCss: css`
              &.isActive {
                background-color: #defff2;
              }
            `,
            },
          },
        }}
        />
      </>
    );
  },
};

export const Example2: Story = {
  parameters: { docs: { description: { story: '1.設置`下拉選項的匡線`(同時可設置任何 css style)<br/>2.設定`預設值`如下範例。<br/>3.設定`關閉Autocomplete`<br/>4.設置`openDirection: upward`' } } },
  render: () => {
    const emptyOption = { label: '', value: '' };
    const defaultOption = { label: 'kdan3', value: '3' };
    const [activeOption, setActiveOption] = useState<OptionType>(
      defaultOption || emptyOption,
    );
    const [inputValue, setInputValue] = useState<string>(activeOption.label);

    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
    };
    const selectNewOption = (option: OptionType) => {
      setInputValue(option.label);
      setActiveOption(option);
    };

    return (
      <>
        <Typography fontSize={{ default: 'body2' }} fontWeight="700">
          selectedOption:
        </Typography>
        {JSON.stringify(activeOption)}

        <Typography fontSize={{ default: 'body2' }} fontWeight="700" margin="5px 0 0">
          inputValue:
        </Typography>
        {inputValue}
        <hr />

        <Select {...{
          id: 'id-1',
          name: 'name-1',
          placeholder: 'Placeholder',
          data: {
            label: 'Label',
            options: [
              { label: 'kdan1', value: '1' },
              { label: 'kdan2', value: '2' },
              { label: 'kdan3', value: '3' },
              { label: 'kdan4', value: '4' },
              { label: 'kdan5', value: '5' },
              { label: 'kdan6', value: '6' },
              { label: 'kdan7', value: '7' },
              { label: 'kdan8', value: '8' },
            ],
            activeOption,
            inputValue,
            onChange: selectNewOption,
            onInputChange,
            closeAutocomplete: true,
          },
          customStyle: {
            label: { color: 'gray800' },
            option: {
              customCss: css`
                border-bottom: #C8C8C8 solid 1px;
                &.isActive {
                  background-color: #defff2;
                }
            `,
            },
            dropdown: {
              openDirection: 'upward',
              maxHeight: '150px',
            },
          },
        }}
        />
      </>
    );
  },
};

export const Example3: Story = {
  parameters: { docs: { description: { story: '1.可自行增加 Icon。<br/> 2. 省略 option 的 `value`，將會以 `label`代替 value。<br/>3. 設置 customStyle `dropdown:{maxHeight: \'auto\'}` 展開全部選項。' } } },
  render: () => {
    const emptyOption = { label: '', value: '' };

    const defaultOption = '';
    const [activeOption, setActiveOption] = useState<OptionType>(
      defaultOption || emptyOption,
    );
    const [inputValue, setInputValue] = useState<string>(activeOption.label);

    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      setInputValue(value);
      if (!value) setActiveOption(emptyOption);
    };
    const selectNewOption = (option: OptionType) => {
      setInputValue(option.label);
      setActiveOption(option);
    };

    return (
      <>
        <Typography fontSize={{ default: 'body4' }} fontWeight="700">
          you select:
        </Typography>
        {JSON.stringify(activeOption)}

        <Typography fontSize={{ default: 'body4' }} fontWeight="700">
          inputValue:
        </Typography>
        {inputValue}

        <hr />

        <Select {...{
          id: 'id-1',
          name: 'name-1',
          placeholder: 'Placeholder',
          data: {
            label: 'Label',
            icon: {
              src: 'https://creative-store.preparing.kdanmobile.com/images/icons/ic-language.svg',
              alt: 'option-icon-1',
            },
            options: [
              { label: 'kdan1' },
              { label: 'kdan2' },
              { label: 'kdan3' },
              { label: 'kdan4' },
              { label: 'kdan5' },
              { label: 'kdan6' },
            ],
            activeOption,
            inputValue,
            onChange: selectNewOption,
            onInputChange,
          },
          customStyle: {
            label: { color: 'gray800' },
            option: {
              customCss: css`
              &.isActive {
                background-color: #defff2;
              }
            `,
            },
            dropdown: {
              maxHeight: 'auto',
            },
          },
        }}
        />
      </>
    );
  },
};
