import { Meta, StoryObj } from '@storybook/react';
import { Banner21 } from '.';

const meta = {
  title: 'Competition/Banner2-1',
  component: Banner21,
  argTypes: {
    data: { control: 'object' },
    customStyle: { control: 'object' },
  },
  tags: ['autodocs'],
} as Meta<typeof Banner21>;

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
        label: 'go to google',
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
