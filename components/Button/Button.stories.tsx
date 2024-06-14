import { Meta, StoryObj } from '@storybook/react';
import { css } from 'styled-components';
import { colors } from '@/constants/themes/colors';
import { Button } from './index';

// https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    id: { control: 'text' },
    name: { control: 'text' },
    children: { control: 'text' },
    icon: { control: 'object' },
    variant: { control: 'inline-radio', options: ['filled', 'outlined', 'text'], description: '[optional]' },
    size: { control: 'inline-radio', options: ['large', 'small'], description: '[optional]' },
    corner: { control: 'inline-radio', options: ['round', 'square'], description: '[optional]' },
    customStyle: { control: 'object', description: '[optional]<br/>顏色可選:<br/> 1)色碼 e.g.`#123456`<br/> 2)Figma元件庫的顏色 e.g.`gray100`' },
    onClick: { action: 'clicked' },
  },
} as Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Basic: Story = {
  args: {
    id: 'button-id',
    name: 'button-name',
    children: 'buttonText',
    variant: 'filled',
    size: 'large',
    corner: 'round',
  },
};
export const IconAppended: Story = {
  args: {
    icon: { alt: 'icon', src: 'https://creative-store.preparing.kdanmobile.com/images/icons/ic-detail-c365.svg' },
    children: 'buttonText',
    variant: 'filled',
    size: 'large',
    corner: 'square',
  },
};

export const CustomCss: Story = {
  args: {
    children: 'buttonText',
    variant: 'filled',
    size: 'large',
    corner: 'round',
    customStyle: {
      customCss: css`
        color: black;
        background-color: ${colors.gray200};
        :hover {
          color: white;
          background-color: ${colors.gray600};
        }
      `,
      maxWidth: '240px',
    },
  },
};

export const DisableAndCustomStyle: Story = {
  args: {
    children: 'buttonText',
    variant: 'outlined',
    size: 'large',
    corner: 'round',
    isDisabled: true,
    customStyle: {
      customCss: css`
        background-color: white;
        :disabled {
          background-color: ${colors.gray400};
        }
      `,
      maxWidth: '240px',
    },
  },
};
