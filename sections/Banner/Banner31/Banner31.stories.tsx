import { Meta, StoryObj } from '@storybook/react';
import { Banner31 } from '.';

const meta = {
  title: 'Sections/Banner3-1',
  component: Banner31,
  argTypes: {
    data: { control: 'object' },
    customStyle: { control: 'object' },
  },
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
} as Meta<typeof Banner31>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    data: {
      title: 'Headline Text Headline Text Headline Text ',
      desc: 'Body Text Body Text Body Text Body Text Body Text Body Text Body Text Body Text Body Text Body Text Body Text Body Text Body Text Body Text Body Text',
      rightImage: {
        src: '/assets/mockImg/transparent_bg.svg',
        alt: 'img-multi-media-panel-1',
      },
      leftImage: {
        src: '/assets/mockImg/transparent_bg.svg',
        alt: 'img-multi-media-panel-1',
      },
    },
    customStyle: {
      backgroundColor: '#fff1e6',
    },
  },
};
