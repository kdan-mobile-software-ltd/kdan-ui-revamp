import { Meta, StoryObj } from '@storybook/react';
import { Card23 } from '.';

const meta = {
  title: 'Section/Card/Card2-3',
  component: Card23,
  argTypes: {
    data: { control: 'object' },
    customStyle: { control: 'object' },
  },
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
} as Meta<typeof Card23>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    data: [
      {
        title: 'panel_1_title',
        desc: 'panel_1_desc The subscription will automatically renew and your card.',
        image: {
          src: 'https://creative-store.preparing.kdanmobile.com/images/cards/img-c365-business.svg',
          alt: 'img-multi-media-panel-1',
        },
        hyperlink: {
          href: 'https://www.google.com/',
          label: 'go to google',
        },
      },
      {
        title: 'panel_2_title',
        desc: 'panel_2_desc The subscription will automatically renew and your card.',
        image: {
          src: 'https://creative-store.preparing.kdanmobile.com/images/cards/img-c365-business.svg',
          alt: 'img-multi-media-panel-1',
        },
        hyperlink: {
          href: 'https://www.google.com/',
          label: 'go to google',
        },
      },
      {
        title: 'panel_3_title',
        desc: 'panel_3_desc The subscription will automatically renew and your card.',
        image: {
          src: 'https://creative-store.preparing.kdanmobile.com/images/cards/img-c365-business.svg',
          alt: 'img-multi-media-panel-1',
        },
        hyperlink: {
          href: 'https://www.google.com/',
          label: 'go to google',
        },
      },
      {
        title: 'panel_4_title',
        desc: 'panel_4_desc The subscription will automatically renew and your card.',
        image: {
          src: 'https://creative-store.preparing.kdanmobile.com/images/cards/img-c365-business.svg',
          alt: 'img-multi-media-panel-1',
        },
        hyperlink: {
          href: 'https://www.google.com/',
          label: 'go to google',
        },
      },
      {
        title: 'panel_5_title',
        desc: 'panel_5_desc The subscription will automatically renew and your card.',
        image: {
          src: 'https://creative-store.preparing.kdanmobile.com/images/cards/img-c365-business.svg',
          alt: 'img-multi-media-panel-1',
        },
        hyperlink: {
          href: 'https://www.google.com/',
          label: 'go to google',
        },
      },
      {
        title: 'panel_6_title',
        desc: 'panel_6_desc The subscription will automatically renew and your card.',
        image: {
          src: 'https://creative-store.preparing.kdanmobile.com/images/cards/img-c365-business.svg',
          alt: 'img-multi-media-panel-1',
        },
        hyperlink: {
          href: 'https://www.google.com/',
          label: 'go to google',
        },
      },
    ],
    customStyle: {
      item: {
        title: { color: '#379fa1' },
      },
      slider: {
        arrowColor: '#379fa1',
      },
    },
  },
};

export const NoCarousel: Story = {
  args: {
    data: [
      {
        title: 'panel_1_title',
        desc: 'panel_1_desc The subscription will automatically renew and your card.',
        image: {
          src: 'https://creative-store.preparing.kdanmobile.com/images/cards/img-c365-business.svg',
          alt: 'img-multi-media-panel-1',
        },
        hyperlink: {
          href: 'https://www.google.com/',
          label: 'go to google',
        },
      },
      {
        title: 'panel_2_title',
        desc: 'panel_2_desc The subscription will automatically renew and your card.',
        image: {
          src: 'https://creative-store.preparing.kdanmobile.com/images/cards/img-c365-business.svg',
          alt: 'img-multi-media-panel-1',
        },
        hyperlink: {
          href: 'https://www.google.com/',
          label: 'go to google',
        },
      },
      {
        title: 'panel_3_title',
        desc: 'panel_3_desc The subscription will automatically renew and your card.',
        image: {
          src: 'https://creative-store.preparing.kdanmobile.com/images/cards/img-c365-business.svg',
          alt: 'img-multi-media-panel-1',
        },
        hyperlink: {
          href: 'https://www.google.com/',
          label: 'go to google',
        },
      },
    ],
    customStyle: {
      item: {
        title: { color: '#379fa1' },
      },
      slider: {
        arrowColor: '#379fa1',
      },
    },
  },
};
