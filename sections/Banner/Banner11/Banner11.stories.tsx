import { Meta, StoryObj } from '@storybook/react';
import { Button } from '@/components/Button';
import React from 'react';
import { Banner11 } from '.';

const meta = {
  title: 'Sections/Banner1-1',
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
    children: (
      <>
        <Button
          variant="outlined"
          corner="square"
          onClick={() => console.log('hello')}
        >
          Buy
        </Button>
        <Button
          variant="filled"
          corner="square"
        >
          More
        </Button>
      </>
    ),
    data: {
      title: 'Headline Text Headline Text',
      desc: 'Body Text Body Text Body Text Body Text Body Text Body Text Body Text Body Text Body Text Body Text Body Text Body Text',
      hyperlink: {
        href: 'https://www.google.com/',
        label: 'Google',
      },
      image: {
        src: 'https://creative-store.preparing.kdanmobile.com/images/cards/img-c365-business.svg',
        alt: 'alt cc',
      },
    },
  },
};
export const CustomImageSize: Story = {
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
      title: 'Headline Text Headline Text',
      desc: 'Body Text Body Text Body Text Body Text Body Text Body Text Body Text Body Text Body Text Body Text Body Text Body Text',
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
      image: {
        width: { default: '300px' },
        height: { default: '300px' },
      },
    },
  },
};
