import { Meta, StoryObj } from '@storybook/react';
import { Card41 } from '.';

const meta = {
  title: 'Sections/Card/Card4-1',
  component: Card41,
  argTypes: {
    data: { control: 'object' },
    customStyle: { control: 'object' },
  },
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
} as Meta<typeof Card41>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    data: [
      {
        userTitle: 'by Allen',
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
        userTitle: 'by Jack',
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
        userTitle: 'by Aaron',
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
        userTitle: 'by Tom',
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
        userTitle: 'by Kevin',
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
        userTitle: 'by Frank',
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
        userTitle: { color: '#379fa1' },
        wrapper: {
          height: { default: '400px' },
        },
      },
      slider: {
        arrowBackgroundColor: '#379fa1',
      },
    },
  },
};

export const NoCarousel: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
  },
  args: {
    data: [
      {
        userTitle: 'panel_1_title',
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
        userTitle: 'panel_2_title',
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
        userTitle: 'panel_3_title',
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
        userTitle: { color: '#379fa1' },
        wrapper: {
          height: { tablet: '400px' },
        },
      },
      slider: {
        arrowBackgroundColor: '#379fa1',
      },
    },
  },
};
