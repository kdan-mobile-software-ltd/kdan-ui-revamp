import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Button } from '@/components/Button';
import { CtaBanner11 } from '.';

const meta = {
  title: 'Sections/CtaBanner1-1',
  component: CtaBanner11,
  argTypes: {
    data: { control: 'object' },
    customStyle: { control: 'object' },
  },
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
} as Meta<typeof CtaBanner11>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    children: (
      <>
        <Button
          variant="outlined"
          corner="square"
          type="button"
          onClick={() => console.log('hello')}
        >
          Buy
        </Button>
        <Button
          variant="filled"
          corner="square"
          type="submit"
          disabled
        >
          More
        </Button>
      </>
    ),
    data: {
      title: 'Headline Text Headline Text Headline Text ',
    },
    customStyle: {
      background: { color: 'gray200' },
    },
  },
};

export const SingleButton: Story = {
  args: {
    children: (
      <Button
        variant="outlined"
        corner="round"
        type="button"
      >
        Buy
      </Button>
    ),
    data: {
      title: 'Headline Text Headline Text Headline Text Headline Text Headline Text Headline Text Headline Text Headline Text Headline Text',
    },
    customStyle: {
      background: { color: 'gray200' },
    },
  },
};
export const TransparentBackground: Story = {
  args: {
    children: (
      <Button
        variant="outlined"
        corner="round"
        type="button"
      >
        Buy
      </Button>
    ),
    data: {
      title: 'Headline Text Headline Text Headline Text ',
    },
    customStyle: {
      title: { color: '#007aff' },
    },
  },
};
