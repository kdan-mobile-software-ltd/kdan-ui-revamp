import { Meta, StoryObj } from '@storybook/react';
import { ContentItem1 } from '.';

const meta = {
  title: 'Sections/Content/ContentItem1',
  component: ContentItem1,
  argTypes: {
    data: { control: 'object' },
    customStyle: { control: 'object' },
  },
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
} as Meta<typeof ContentItem1>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    data: {
      title: 'panel_1_title Subscription Policies',
      desc: 'panel_1_desc The subscription will automatically renew and your card will be charged until you cancel. Coupons are for one-time use only.',
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
