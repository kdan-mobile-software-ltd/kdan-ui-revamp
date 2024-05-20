import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { GroupWrapper } from './styled';
import { ComponentProps } from './types';
import { ContentItem41 } from '../Item/ContentItem41';

const meta = {
  title: 'Section/Content/Content4-1',
  subcomponents: { GroupWrapper, ContentItem41 },
  argTypes: {
    data: { control: 'object', description: '[required] only `title` is require in each Item<br><br> `toggleText` default is `{open: \'Open\', close: \'Close\'}`' },
    customStyle: { control: 'object' },
  },
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
} as Meta<ComponentProps>;

export default meta;

type Story = StoryObj<typeof meta>;

const Template: Story = {
  render: ({ data, customStyle }) => (
    <GroupWrapper numbersOfColumn={customStyle?.others?.numbersOfColumn}>
      {data.map((item) => (
        <ContentItem41
          key={item.title}
          data={item}
          customStyle={customStyle}
        />
      ))}
    </GroupWrapper>
  ),
};

export const Basic: Story = {
  ...Template,
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
  ...Template,
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
