import { Meta, StoryObj } from '@storybook/react';
import { Banner11 } from '.';

const meta = {
  title: 'Competition/Banner1-1',
  component: Banner11,
  argTypes: {
    data: { control: 'object' },
    customStyle: { control: 'object' },
  },
  tags: ['autodocs'],
} as Meta<typeof Banner11>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    data: {
      title: 'Headline Text Headline Text Headline Text Headline Text',
      desc: 'Description Text Description Text Description Text Description Text Description Text Description Text Description Text Description Text Description Text',
      button1: {
        icon: {
          src: 'https://creative-store.preparing.kdanmobile.com/images/icons/ic-detail-c365.svg',
          alt: 'img-multi-media-panel-1',
        },
        text: 'Buy it',
        id: 'button-1',
      },
      button2: {
        icon: {
          src: 'https://creative-store.preparing.kdanmobile.com/images/icons/ic-detail-c365.svg',
          alt: 'img-multi-media-panel-1',
        },
        text: 'More',
      },
      hyperlink: {
        href: 'https://www.google.com/',
        label: 'Google',
      },
      image: {
        src: 'https://creative-store.preparing.kdanmobile.com/images/cards/img-c365-business.svg',
        alt: 'alt cc',
      },
    },
    customStyle: {
      button1: {
        variant: 'filled',
        size: 'large',
        corner: 'square',
      },
      button2: {
        variant: 'outlined',
        size: 'large',
        corner: 'square',
      },
      image: {
        width: { default: '300px' },
        height: { default: '500px' },
      },
    },
  },
};
