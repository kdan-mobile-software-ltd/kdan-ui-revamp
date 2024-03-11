import { Meta, StoryObj } from '@storybook/react';
import { Typography } from '.';

const meta = {
  title: 'Components/Typography',
  component: Typography,
  argTypes: {
    fontSize: { control: 'object' },
    color: { control: 'color' },
    padding: { control: 'text' },
    margin: { control: 'text' },
    children: { control: 'text' },
  },
  tags: ['autodocs'],
} as Meta<typeof Typography>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CommonStyle: Story = {
  args: {
    fontSize: { default: 'h3', mobile: 'h7' },
    color: 'gray600',
    padding: '10px',
    margin: '10px',
    children: 'Typography',
  },
};
