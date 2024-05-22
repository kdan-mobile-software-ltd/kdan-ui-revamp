import { Meta, StoryObj } from '@storybook/react';
import { EventBar11 } from '.';

const meta = {
  title: 'Section/EventBar1-1',
  component: EventBar11,
  argTypes: {
    data: { control: 'object' },
    customStyle: { control: 'object' },
  },
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
} as Meta<typeof EventBar11>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    data: {
      title: 'Headline Text Headline Text Headline Text',
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
      backgroundColor: '#f0fcff',
    },
  },
};
