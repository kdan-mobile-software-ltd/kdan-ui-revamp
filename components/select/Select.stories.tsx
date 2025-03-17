import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import styled, { css } from 'styled-components';
import { Select } from './index';
import { OptionType } from './types';
import { Typography } from '../Typography';
import { OptionStyleType } from './styled';

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

const Code = styled.code`
  background-color: #eee;
  border-radius: 5px;
  padding: 0 3px;

  z-index: -1;
`;

const Description = styled.div`
  width: 350px;
  min-height: 200px;
  border-bottom: 1px grey solid;
  margin-bottom: 4px;
  line-height: 1.5;
`;

export const SingleSelect1: Story = {
  render: () => {
    const [activeOption, setActiveOption] = useState<OptionType[]>([]);
    const [inputValue, setInputValue] = useState<string>('');

    const onInputChange = (value: string) => {
      setInputValue(value);
    };

    const onChange = (option: OptionType) => {
      setInputValue(option.label);
      setActiveOption([option]);
    };

    return (
      <>
        <Description>
          <Typography fontSize={{ default: 'body1' }} fontWeight="700">
            activeOption:
          </Typography>
          {JSON.stringify(activeOption)}
          <Typography fontSize={{ default: 'body1' }} fontWeight="700" margin="5px 0 0">
            inputValue:
          </Typography>
          {inputValue}
        </Description>

        <Select {...{
          id: 'id-SingleSelect1',
          name: 'name-SingleSelect1',
          placeholder: 'Placeholder',
          data: {
            label: 'Chose a fruit:',
            options: [
              { label: 'apple', value: 'apple' },
              { label: 'banana', value: 'banana' },
              { label: 'lemon', value: 'lemon' },
              { label: 'guava', value: 'guava' },
              { label: 'grape', value: 'grape' },
            ],
            activeOption,
            inputValue,
            onChange,
            onInputChange,
            isShowCancelAllOption: true,
          },
          customStyle: {
            label: { color: 'gray800' },
            dropdown: {
              openDirection: 'auto',
            },
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

export const SingleSelect2: Story = {
  render: () => {
    const [activeOption, setActiveOption] = useState<OptionType[]>([{ label: '日本語', value: 'Japanese' }]);
    const [inputValue, setInputValue] = useState<string>('');

    const onInputChange = (value: string) => {
      setInputValue(value);
    };

    const onChange = (option: OptionType) => {
      setInputValue(option.label);
      setActiveOption([option]);
    };

    return (
      <>
        <Description>
          <p>
            <p>
              1.可自行增加 Icon。
            </p>
            <p>
              2. 設置 customStyle
              <Code>{'dropdown: {maxHeight: \'auto\'}'}</Code>
              展開全部選項。
            </p>
            <p>
              3.
              <Code>isHideAutocomplete</Code>
              可關閉 Autocomplete 功能
            </p>
          </p>

          <Typography fontSize={{ default: 'body1' }} fontWeight="700">
            you select:
          </Typography>
          {JSON.stringify(activeOption)}

          <Typography fontSize={{ default: 'body1' }} fontWeight="700">
            inputValue:
          </Typography>
          {inputValue}
        </Description>

        <Select {...{
          id: 'id-SingleSelect2',
          name: 'name-SingleSelect2',
          placeholder: 'search something...',
          data: {
            label: '請選擇語系',
            icon: {
              src: 'https://creative-store.preparing.kdanmobile.com/images/icons/ic-language.svg',
              alt: 'option-icon-1',
            },
            options: [
              { label: '中文（繁體）', value: 'chinese_traditional' },
              { label: '中文(簡體)', value: 'chinese_simplified' },
              { label: 'English', value: 'english' },
              { label: '日本語', value: 'Japanese' },
              { label: '한국어', value: 'korean' },
              { label: 'Español', value: 'spanish' },
            ],
            activeOption,
            inputValue,
            onChange,
            onInputChange,
            isHideAutocomplete: true,
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
              maxHeight: '200px',
            },
          },
        }}
        />
      </>
    );
  },
};

export const MultipleSelect3: Story = {
  render: () => {
    const options = [
      { label: 'kdan1', value: '1' },
      { label: 'kdan2', value: '2' },
      { label: 'kdan3', value: '3' },
      { label: 'kdan4', value: '4' },
      { label: 'kdan5', value: '5' },
      { label: 'kdan6', value: '6' },
      { label: 'kdan7', value: '7' },
      { label: 'kdan8', value: '8' },
      { label: 'kdan9', value: '9' },
      { label: 'kdan10', value: '10' },
      { label: 'kdan11', value: '11' },
      { label: 'kdan12', value: '12' },
    ];
    const isMultiSelect = true;
    const defaultOption = [options[3]];
    const [activeOption, setActiveOption] = useState<OptionType[]>(defaultOption);
    const [inputValue, setInputValue] = useState<string>(
      isMultiSelect ? '' : activeOption[0].label,
    );

    const onInputChange = (value: string) => {
      setInputValue(value);
    };

    const onChange = (option: OptionType) => {
      console.log('onchange:', option);
      if (isMultiSelect) {
        setActiveOption((prev) => {
          const filtered = prev.filter((active) => active.value !== option.value);
          return filtered.length === prev.length
            ? [...prev, option] // add option
            : filtered; // remove option
        });
      }
    };

    return (
      <>
        <Description>
          <p>
            1.有設定
            <Code>下拉選項的匡線</Code>
            (同時可設置任何 css style)
            <br />
            2.有設定
            <Code>預設選項</Code>
            <br />
            3.有設定
            <Code>openDirection: auto</Code>
            ，在元件距離畫面 viewport 底部
            {'<180px'}
            時，dropdown 就會自動上開(
            <Code>
              openDirection: upward
            </Code>
            )，其餘為下開 (
            <Code>
              downward
            </Code>
            )
          </p>
          <Typography fontSize={{ default: 'body1' }} fontWeight="700">
            activeOption:
          </Typography>
          {JSON.stringify(activeOption)}

          <Typography fontSize={{ default: 'body1' }} fontWeight="700" margin="5px 0 0">
            inputValue:
          </Typography>
          {inputValue}
        </Description>

        <Select {...{
          id: 'id-MultipleSelect3',
          name: 'name-MultipleSelect3',
          data: {
            label: 'Movies',
            options,
            activeOption,
            inputValue,
            onChange,
            onInputChange,
            isMultiSelect,
            isShowCancelAllOption: true,
          },
          customStyle: {
            label: { color: 'gray800' },
            option: {
              customCss: css<OptionStyleType>`
                ${({ isBottom }) => !isBottom && css`border-bottom: #C8C8C8 solid 1px;`}
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
