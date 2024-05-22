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
          icon: {
            src: 'https://kdan-website.preparing.kdanmobile.com/images/kdan_all_icon/cloud/dottedsign.svg',
            alt: 'img-multi-media-panel-1',
          },
          hyperlink: {
            href: 'https://www.google.com/',
            label: 'go to google',
          },
          image: {
            src: 'https://creative-store.preparing.kdanmobile.com/images/cards/img-c365-business.svg',
            alt: 'alt aa',
          },
        },
        {
          title: 'panel_2_title',
          desc: 'panel_2_desc',
          icon: {
            src: 'https://kdan-website.preparing.kdanmobile.com/images/kdan_all_icon/cloud/dottedsign.svg',
            alt: 'img-multi-media-panel-2',
          },
          hyperlink: {
            href: 'https://ithelp.ithome.com.tw/',
            label: 'go to ithome',
          },
          image: {
            src: 'https://creative-store.preparing.kdanmobile.com/images/cards/img-c365-business.svg',
            alt: 'alt aa',
          },
        },
        {
          title: 'panel_3_title',
          desc: 'panel_3_desc',
          icon: {
            src: 'https://creative-store.preparing.kdanmobile.com/images/icons/ic-next.svg',
            alt: 'img-multi-media-panel-3',
          },
          image: {
            src: 'https://creative-store.preparing.kdanmobile.com/images/cards/img-c365-business.svg',
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
