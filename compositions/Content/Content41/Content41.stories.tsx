import { Meta, StoryObj } from '@storybook/react';
import { Content41 } from '.';

const meta = {
  title: 'Competition/Content/Content4-1',
  component: Content41,
  argTypes: {
    data: { control: 'object', description: '[required] only `title` is require in each Item<br><br> `toggleText` default is `{open: \'Open\', close: \'Close\'}`' },
    customStyle: { control: 'object' },
  },
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
} as Meta<typeof Content41>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    data: [
      {
        title: 'panel_1_title Subscription Policies',
        desc: 'panel_1_desc The subscription will automatically renew and your card will be charged.',
      },
      {
        title: 'panel_2_title',
        desc: 'panel_2_desc',
      },
      {
        title: 'panel_3_title',
        desc: 'panel_3_desc',
      },
      {
        title: 'panel_4_title',
        desc: 'panel_4_desc',
      },
      {
        title: 'panel_5_title',
        desc: 'panel_5_desc',
      },
      {
        title: 'panel_6_title',
        desc: 'panel_6_desc',
      },
    ],
    customStyle: {
      others: { numbersOfColumn: 3 },
      title: { color: 'gray700' },
    },
  },
};

export const TwoColumns: Story = {
  args: {
    data: [
      {
        title: 'panel_1_title Subscription Policies 2',
        desc: 'panel_1_desc The subscription will automatically renew and your card will be charged.',
      },
      {
        title: 'panel_2_title 2',
        desc: 'panel_2_desc',
      },
      {
        title: 'panel_3_title 2',
        desc: 'panel_3_desc',

      },
      {
        title: 'panel_4_title 2',
        desc: 'panel_4_desc',
      },
    ],
    customStyle: {
      title: { color: '#22BBAA', fontWeight: '400' },
      borderColor: '#22BBAA',
      others: { numbersOfColumn: 2 },
    },
  },
};
