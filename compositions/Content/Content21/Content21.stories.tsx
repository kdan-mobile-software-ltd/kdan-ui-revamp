import { Meta, StoryObj } from '@storybook/react';
import { Content21 } from '.';

const meta = {
  title: 'Competition/Content2-1',
  component: Content21,
  argTypes: {
    data: { control: 'object', description: '[required] only `title` is require in each Item' },
  },
  tags: ['autodocs'],
} as Meta<typeof Content21>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    data: [
      {
        title: 'title aa',
        desc: 'desc aa',
        image: {
          src: 'https://creative-store.preparing.kdanmobile.com/images/cards/img-c365-business.svg',
          alt: 'alt aa',
        },
        hyperlink: {
          href: 'https://www.google.com/',
          label: 'go to google',
        },
      },
      {
        title: 'title bb',
        desc: 'desc bb',
        image: {
          src: 'https://creative-store.preparing.kdanmobile.com/images/cards/img-c365-business.svg',
          alt: 'alt bb',
        },
        hyperlink: {
          href: 'https://www.google.com/',
          label: 'go to google',
        },
      },
      {
        title: 'title cc',
        desc: 'desc cc',
        image: {
          src: 'https://creative-store.preparing.kdanmobile.com/images/cards/img-c365-business.svg',
          alt: 'alt cc',
        },
      },
      {
        title: 'title dd',
        desc: 'desc dd',
        image: {
          src: 'https://creative-store.preparing.kdanmobile.com/images/cards/img-c365-business.svg',
          alt: 'alt dd',
        },
      },
    ],
  },
};
