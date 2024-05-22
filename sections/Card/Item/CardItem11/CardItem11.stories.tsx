import { Meta, StoryObj } from '@storybook/react';
import { CardItem11 } from '.';

const meta = {
  title: 'Sections/Card/CardItem1-1',
  component: CardItem11,
  argTypes: {
    data: { control: 'object' },
    customStyle: { control: 'object' },
  },
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
} as Meta<typeof CardItem11>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    data: {
      title: 'panel_1_title',
      desc: 'panel_1_desc The subscription will automatically renew',
      icon: {
        src: 'https://creative-store.preparing.kdanmobile.com/images/functions/img-writeon-adjust-video.svg',
        alt: 'img-multi-media-panel-1',
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

export const Background: Story = {
  args: {
    data: {
      title: 'background',
      desc: 'background background background',
      icon: {
        src: 'https://creative-store.preparing.kdanmobile.com/images/functions/img-writeon-adjust-video.svg',
        alt: 'img-multi-media-panel-1',
      },
      hyperlink: {
        href: 'https://www.google.com/',
        label: 'go to google',
      },
    },
    customStyle: {
      title: { color: '#007aff' },
      wrapper: {
        isNoHoverShadow: true,
        isNoBorder: true,
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
      icon: {
        src: 'https://creative-store.preparing.kdanmobile.com/images/functions/img-writeon-adjust-video.svg',
        alt: 'img-multi-media-panel-1',
      },
    },
    customStyle: {
      title: { color: '#007aff' },
      wrapper: {
        isNoHoverShadow: true,
        isNoBorder: true,
        backgroundColor: '#dbf2fa',
      },
    },
  },
};
