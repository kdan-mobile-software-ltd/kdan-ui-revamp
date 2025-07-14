import { Meta, StoryObj } from '@storybook/react';
import { Button } from '@/components/Button';
import React from 'react';
import { Banner21 } from '.';

const meta = {
  title: 'Sections/Banner2-1',
  component: Banner21,
  argTypes: {
    data: { control: 'object' },
    customStyle: { control: 'object' },
  },
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
} as Meta<typeof Banner21>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    children: (
      <Button
        variant="outlined"
        corner="round"
        type="button"
      >
        Buy
      </Button>
    ),
    data: {
      title: 'Headline Text Headline Text Headline Text Headline Text',
      desc: 'Description Text Description Text Description Text Description Text Description Text Description Text Description Text Description Text Description Text',
      hyperlink: {
        href: 'https://www.google.com/',
        label: 'go to google',
      },
      image: {
        src: '/assets/mockImg/mock_img.jpg',
        alt: 'alt cc',
      },
    },
  },
};
