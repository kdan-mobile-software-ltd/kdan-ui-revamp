import { Meta, StoryObj } from '@storybook/react';
import { EventBar11 } from '.';

const meta = {
  title: 'Sections/EventBar1-1',
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
        src: '/assets/mockImg/logo.svg',
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
