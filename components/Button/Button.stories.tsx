import { Meta, StoryObj } from '@storybook/react';
import { css } from 'styled-components';
import { colors } from '@/constants/themes/colors';
import { Button } from './index';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    id: { control: 'text' },
    name: { control: 'text' },
    children: { control: 'text' },
    icon: { control: 'object' },
    variant: { control: 'inline-radio', options: ['filled', 'outlined', 'text'], description: '[optional]' },
    size: { control: 'inline-radio', options: ['large', 'small'], description: '[optional]' },
    corner: { control: 'inline-radio', options: ['round', 'square'], description: '[optional]' },
    customStyle: { control: 'object', description: '[optional]<br/>1. 顏色可選:<br/> a)色碼 e.g.`#123456`<br/> b)Figma元件庫的顏色 e.g.`gray100`<br/><br/> 2. props customCss 用 `styled-component`的 `css` 寫。' },
    onClick: { action: 'clicked' },
  },
} as Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

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
    icon: { alt: 'icon', src: '/assets/mockImg/logo.svg' },
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
    disabled: true,
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
