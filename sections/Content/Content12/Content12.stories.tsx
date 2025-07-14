import { Meta, StoryObj } from '@storybook/react';
import { Content12 } from '.';

const meta = {
  title: 'Sections/Content/Content1-2',
  component: Content12,
  argTypes: {
    data: { control: 'object', description: '[required] only `title` is require in each Item<br><br> `toggleText` default is `{open: \'Open\', close: \'Close\'}`' },
    customStyle: { control: 'object' },
  },
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
} as Meta<typeof Content12>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    data: {
      items: [
        {
          title: 'panel_1_title Subscription Policies',
          desc: 'panel_1_desc The subscription will automatically renew and your card will be charged until you cancel. Coupons are for one-time use only.',
          hyperlink: {
            href: 'https://www.google.com/',
            label: 'go to google',
          },
          image: {
            src: '/assets/mockImg/mock_img.jpg',
            alt: 'alt aa',
          },
        },
        {
          title: 'panel_2_title',
          desc: 'panel_2_desc',
          hyperlink: {
            href: 'https://ithelp.ithome.com.tw/',
            label: 'go to ithome',
          },
          image: {
            src: '/assets/mockImg/mock_img.jpg',
            alt: 'alt aa',
          },
        },
        {
          title: 'panel_3_title',
          desc: 'panel_3_desc',
          image: {
            src: '/assets/mockImg/mock_img.jpg',
            alt: 'alt aa',
          },
        },
      ],
    },
    customStyle: {
      title: { color: 'gray700' },
    },
  },
};

export const HideLongerThan2: Story = {
  args: {
    data: {
      items: [
        {
          title: 'panel_1_title Subscription Policies',
          desc: 'panel_1_desc The subscription will automatically renew and your card will be charged until you cancel. Coupons are for one-time use only.',
          hyperlink: {
            href: 'https://www.google.com/',
            label: 'go to google',
          },
          image: {
            src: '/assets/mockImg/mock_img.jpg',
            alt: 'alt aa',
          },
        },
        {
          title: 'panel_2_title',
          desc: 'panel_2_desc',
          hyperlink: {
            href: 'https://ithelp.ithome.com.tw/',
            label: 'go to ithome',
          },
          image: {
            src: '/assets/mockImg/mock_img.jpg',
            alt: 'alt aa',
          },
        },
        {
          title: 'panel_3_title',
          desc: 'panel_3_desc',
          image: {
            src: '/assets/mockImg/mock_img.jpg',
            alt: 'alt aa',
          },
        },
      ],
    },
    customStyle: {
      title: { color: 'gray700' },
      others: { hideLongerThan: 2 },
    },
  },
};
