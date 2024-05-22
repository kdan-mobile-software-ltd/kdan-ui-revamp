import { Meta, StoryObj } from '@storybook/react';
import { CardItem23 } from '.';

const meta = {
  title: 'Sections/Card/CardItem2-3',
  component: CardItem23,
  argTypes: {
    data: { control: 'object' },
    customStyle: { control: 'object' },
  },
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
} as Meta<typeof CardItem23>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    data: {
      title: 'panel_1_title',
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
      title: { color: 'gray700' },
    },
  },
};

export const SmallSize: Story = {
  args: {
    data: {
      title: 'background',
      desc: 'background background background',
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
      title: { color: '#007aff', textAlign: 'center' },
      wrapper: {
        backgroundColor: '#dbf2fa',
      },
    },
  },
};

export const NoHyperlink: Story = {
  args: {
    data: {
      title: 'NoHyperlink',
      desc: 'background background background',
      image: {
        src: 'https://creative-store.preparing.kdanmobile.com/images/cards/img-c365-business.svg',
        alt: 'alt aa',
      },
    },
    customStyle: {
      title: { color: '#007aff' },
      wrapper: {
        borderColor: '#00a89b',
      },
    },
  },
};
