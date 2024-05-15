import { Meta, StoryObj } from '@storybook/react';
import { CardItem41 } from '.';

const meta = {
  title: 'Competition/Card/CardItem4-1',
  component: CardItem41,
  argTypes: {
    data: { control: 'object' },
    customStyle: { control: 'object', description: '`wrapper.height` is to fixed height for the usage of Carousel...etc <br> `size` default is "small"' },
  },
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
} as Meta<typeof CardItem41>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    data: {
      userTitle: 'by Allen',
      desc: 'panel_1_desc The subscription will automatically renew',
      image: {
        src: 'https://creative-store.preparing.kdanmobile.com/images/cards/img-c365-business.svg',
        alt: 'alt aa',
      },
      hyperlink: {
        href: 'https://www.google.com/',
        label: 'go to google',
      },
    },
    customStyle: {
      userTitle: { color: 'gray700' },
    },
  },
};

export const LargeSize: Story = {
  args: {
    data: {
      userTitle: 'by Allen',
      desc: 'Body Text Body Text Body Text Body Text Body Text Body Text Body Text Body Text Body Text Body Text Body Text Body Text Body Text Body Text Body Text Body Text Text Body Text Body Text Body Text',
      image: {
        src: 'https://creative-store.preparing.kdanmobile.com/images/cards/img-c365-business.svg',
        alt: 'alt aa',
      },
      hyperlink: {
        href: 'https://www.google.com/',
        label: 'go to google',
      },
    },
    customStyle: {
      userTitle: { color: 'gray400' },
      size: 'large',
    },
  },
};

export const LargeSizeWithFixedHeight: Story = {
  args: {
    data: {
      userTitle: 'by Allen',
      desc: 'Body Text Body Text Body Text Body Text Body Text Body Text Body Text Body Text Body Text Body Text Body Text Body Text Body Text Body Text Body Text Body Text Text Body Text Body Text Body Text',
      image: {
        src: 'https://creative-store.preparing.kdanmobile.com/images/cards/img-c365-business.svg',
        alt: 'alt aa',
      },
      hyperlink: {
        href: 'https://www.google.com/',
        label: 'go to google',
      },
    },
    customStyle: {
      userTitle: { color: 'gray400' },
      size: 'large',
      wrapper: {
        height: {
          largeSize: '300px',
          tablet: '400px',
        },
      },
    },
  },
};
