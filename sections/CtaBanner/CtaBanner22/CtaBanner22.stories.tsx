import { Meta, StoryObj } from '@storybook/react';
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
    data: {
      title: 'Headline Text Headline Text Headline Text ',
      desc: 'Description Text Description Text Description Text Description Text Description Text Description Text Description Text Description Text Description Text',
      button1: {
        icon: {
          src: 'https://creative-store.preparing.kdanmobile.com/images/icons/ic-detail-c365.svg',
          alt: 'img-multi-media-panel-1',
        },
        text: 'Buy it',
      },
      button2: {
        icon: {
          src: 'https://creative-store.preparing.kdanmobile.com/images/icons/ic-detail-c365.svg',
          alt: 'img-multi-media-panel-1',
        },
        text: 'More',
      },
    },
    customStyle: {
      background: { color: 'gray200' },
      button1: {
        variant: 'filled',
        size: 'large',
        corner: 'round',
      },
      button2: {
        variant: 'outlined',
        size: 'large',
        corner: 'round',
      },
    },
  },
};

export const SingleButton: Story = {
  args: {
    data: {
      title: 'Headline Text Headline Text Headline Text Headline Text Headline Text Headline Text Headline Text Headline Text Headline Text',
      button1: {
        text: 'Buy it',
      },
    },
    customStyle: {
      background: { color: 'gray200' },
      button1: {
        variant: 'filled',
        size: 'large',
        corner: 'square',
      },
    },
  },
};

export const LessText: Story = {
  args: {
    data: {
      title: 'Headline Text',
      desc: 'Desc Text',
      button1: {
        text: 'Buy it',
      },
    },
    customStyle: {
      background: { color: 'gray200' },
      button1: {
        variant: 'filled',
        size: 'large',
        corner: 'square',
      },
    },
  },
};
