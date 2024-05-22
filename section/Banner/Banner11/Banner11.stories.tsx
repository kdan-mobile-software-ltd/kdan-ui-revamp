import { Meta, StoryObj } from '@storybook/react';
import { Banner11 } from '.';

const meta = {
  title: 'Section/Banner1-1',
  component: Banner11,
  argTypes: {
    data: { control: 'object' },
    customStyle: { control: 'object' },
  },
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
} as Meta<typeof Banner11>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    data: {
      title: 'Headline Text Headline Text',
      desc: 'Body Text Body Text Body Text Body Text Body Text Body Text Body Text Body Text Body Text Body Text Body Text Body Text',
      button1: {
        text: 'Buy it',
        id: 'button-1',
      },
      button2: {
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
        size: 'small',
        corner: 'square',
      },
      button2: {
        variant: 'outlined',
        size: 'small',
        corner: 'square',
      },
    },
  },
};
export const CustomImageSize: Story = {
  args: {
    data: {
      title: 'Headline Text Headline Text',
      desc: 'Body Text Body Text Body Text Body Text Body Text Body Text Body Text Body Text Body Text Body Text Body Text Body Text',
      button1: {
        icon: {
          src: 'https://creative-store.preparing.kdanmobile.com/images/icons/ic-detail-c365.svg',
          alt: 'img-multi-media-panel-1',
        },
        text: 'Button text',
        id: 'button-1',
      },
      button2: {
        icon: {
          src: 'https://creative-store.preparing.kdanmobile.com/images/icons/ic-detail-c365.svg',
          alt: 'img-multi-media-panel-1',
        },
        text: 'Button text',
      },
      hyperlink: {
        href: 'https://www.google.com/',
        label: 'Hyperlink',
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
        height: { default: '300px' },
      },
    },
  },
};
