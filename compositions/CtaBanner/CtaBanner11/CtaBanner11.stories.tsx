import { Meta, StoryObj } from '@storybook/react';
import CtaBanner11 from '.';

const meta = {
  title: 'Competition/CtaBanner1-1',
  component: CtaBanner11,
  argTypes: {
    data: { control: 'object' },
    customStyle: { control: 'object' },
  },
  tags: ['autodocs'],
} as Meta<typeof CtaBanner11>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    data: {
      title: 'Headline Text Headline Text Headline Text ',
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
        text: 'More Information',
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
export const TransparentBackground: Story = {
  args: {
    data: {
      title: 'Headline Text Headline Text Headline Text ',
      button1: {
        text: 'Buy it',
      },
      button2: {
        text: 'More Detail',
      },
    },
    customStyle: {
      title: { color: '#007aff' },
      button1: {
        variant: 'filled',
        size: 'large',
        corner: 'square',
        customStyle: { backgroundColor: '#10a0a0', borderColor: '#10a0a0' },
      },
      button2: {
        variant: 'outlined',
        size: 'large',
        corner: 'square',
        customStyle: { color: '#10a0a0', borderColor: '#10a0a0' },
      },
    },
  },
};
