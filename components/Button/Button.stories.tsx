import { Meta, StoryObj } from '@storybook/react';
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
    children: 'buttonText',
    variant: 'filled',
    size: 'large',
    corner: 'round',
    customStyle: {
      color: '',
      borderColor: '',
      backgroundColor: '',
      hoverColor: '',
      hoverBackgroundColor: '',
      hoverBorderColor: '',
    },
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
