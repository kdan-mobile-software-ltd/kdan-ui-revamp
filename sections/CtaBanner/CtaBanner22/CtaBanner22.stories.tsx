import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Button } from '@/components/Button';
import { CtaBanner22 } from '.';

const meta = {
  title: 'Sections/CtaBanner2-2',
  component: CtaBanner22,
  argTypes: {
    data: { control: 'object' },
    customStyle: { control: 'object' },
  },
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
} as Meta<typeof CtaBanner22>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  tags: ['!dev', '!docs'],
  args: {
    children: (
      <>
        <Button
          variant="outlined"
          corner="square"
          type="submit"
          icon={{
            src: 'https://creative-store.preparing.kdanmobile.com/images/icons/ic-detail-c365.svg',
            alt: 'img-multi-media-panel-1',
          }}
        >
          Buy
        </Button>
        <Button
          variant="filled"
          corner="square"
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
      title: 'Headline Text Headline Text Headline Text Headline Text Headline Text Headline Text Headline Text Headline Text Headline Text',
    },
    customStyle: {
      background: { color: 'gray200' },
    },
  },
};

export const LessText: Story = {
  args: {
    children: (
      <Button
        corner="round"
        type="button"
      >
        Buy
      </Button>
    ),
    data: {
      title: 'Headline Text',
      desc: 'Desc Text',
    },
    customStyle: {
      background: { color: 'gray200' },
    },
  },
};
