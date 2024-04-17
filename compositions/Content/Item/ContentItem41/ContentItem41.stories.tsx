import { Meta, StoryObj } from '@storybook/react';
import ContentItem41 from '.';

const meta = {
  title: 'Competition/Content/ContentItem4-1',
  component: ContentItem41,
  argTypes: {
    data: { control: 'object' },
    customStyle: { control: 'object' },
  },
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
} as Meta<typeof ContentItem41>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    data: {
      title: 'panel_1_title Subscription Policies',
      desc: 'panel_1_desc The subscription will automatically renew and your card will be charged until you cancel. Coupons are for one-time use only.',
    },
    customStyle: {
      title: { color: '#379fa1' },
      borderColor: '#379fa1',
    },
  },
};
