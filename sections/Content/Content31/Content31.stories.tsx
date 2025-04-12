import { Meta, StoryObj } from '@storybook/react';
import { Content31 } from '.';

const meta = {
  title: 'Sections/Content/Content3-1',
  component: Content31,
  argTypes: {
    data: { control: 'object', description: '[required] only `title` is require in each Item<br><br> `toggleText` default is `{open: \'Open\', close: \'Close\'}`' },
    customStyle: { control: 'object' },
  },
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
} as Meta<typeof Content31>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    data: [{
      title: 'panel_1_title Subscription Policies',
      desc: 'panel_1_desc The subscription will automatically renew and your card.',
      image: {
        src: 'https://creative-store.preparing.kdanmobile.com/images/cards/img-c365-business.svg',
        alt: 'img-multi-media-panel-1',
      },
      hyperlink: {
        href: 'https://www.google.com/',
        label: 'go to google',
      },
    }, {
      title: 'panel_2_title Subscription Policies',
      desc: 'panel_2_desc The subscription will automatically renew and your card.',
      image: {
        src: 'https://creative-store.preparing.kdanmobile.com/images/cards/img-c365-business.svg',
        alt: 'img-multi-media-panel-1',
      },
      hyperlink: {
        href: 'https://www.google.com/',
        label: 'go to google',
      },
    }, {
      title: 'panel_3_title Subscription Policies',
      desc: 'panel_3_desc The subscription will automatically renew and your card.',
      image: {
        src: 'https://creative-store.preparing.kdanmobile.com/images/cards/img-c365-business.svg',
        alt: 'img-multi-media-panel-1',
      },
      hyperlink: {
        href: 'https://www.google.com/',
        label: 'go to google',
      },
    }],
    customStyle: {
      item: {
        title: { color: '#379fa1', borderLeftColor: '#379fa1' },
        wrapper: {
          borderColor: '#379fa1',
          backgroundColor: '#eeffee',
        },
      },
      slider: {
        arrowBackgroundColor: '#379fa1',
      },
    },
  },
};
