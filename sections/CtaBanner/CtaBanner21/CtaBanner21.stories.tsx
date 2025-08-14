import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Button } from '@/components/Button';
import { CtaBanner21 } from '.';

const meta = {
  title: 'Sections/CtaBanner2-1',
  component: CtaBanner21,
  argTypes: {
    data: { control: 'object' },
    customStyle: { control: 'object' },
  },
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
} as Meta<typeof CtaBanner21>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    children: (
      <>
        <Button
          variant="outlined"
          corner="square"
          type="submit"
          icon={{
            src: '/assets/mockImg/logo.svg',
            alt: 'img-multi-media-panel-1',
          }}
        >
          Buy
        </Button>
        <Button
          variant="filled"
          corner="square"
          type="button"
          icon={{
            src: '/assets/mockImg/logo.svg',
            alt: 'img-multi-media-panel-1',
          }}
        >
          More
        </Button>
      </>
    ),
    data: {
      title: 'Headline Text Headline Text Headline Text ',
      desc: 'Description Text Description Text Description Text Description Text Description Text Description Text Description Text Description Text Description Text',
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
      title: 'Headline Text',

    },
    customStyle: {
      background: { color: 'gray200' },
    },
  },
};

export const TransparentBackground: Story = {
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
      desc: 'Description Text Description Text Description Text Description Text Description Text Description Text Description Text Description Text Description Text',
    },
    customStyle: {
      title: { color: '#007aff' },
    },
  },
};
