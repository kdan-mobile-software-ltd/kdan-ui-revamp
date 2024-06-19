import { css } from 'styled-components';
import { Meta, StoryObj } from '@storybook/react';
import { Hyperlink } from '.';
import { VARIANTS } from './types';

const meta = {
  title: 'Components/Hyperlink',
  component: Hyperlink,
  argTypes: {
    id: { control: 'text' },
    target: { control: 'text', description: 'e.g. `_blank`' },
    variant: { control: 'inline-radio', options: [...Object.keys(VARIANTS)] },
    children: { control: 'text' },
    href: { control: 'text' },
    color: { control: 'color' },
    customCss: { description: '用 `styled-component`的 `css` 寫' },
  },
  tags: ['autodocs'],
} as Meta<typeof Hyperlink>;

export default meta;

type Story = StoryObj<typeof meta>;

export const UnderlineStyle: Story = {
  args: {
    id: 'a-tag-id',
    variant: 'noUnderline',
    children: 'go to Google',
    href: 'https://google.com/',
    target: '_blank',
  },
};

export const ArrowStyle: Story = {
  args: {
    variant: 'underline',
    children: 'go to Goole',
    href: 'https://google.com/',
  },
};

export const CustomCss: Story = {
  args: {
    id: 'a-tag-id',
    variant: 'noUnderline',
    children: 'go to Google go to Google go to Google',
    href: 'https://google.com/',
    target: '_blank',
    customCss: css`
      background-color: #ccccf9;
      word-break: break-word;
      max-width: 50px;
      display: block;
    `,
  },
};
