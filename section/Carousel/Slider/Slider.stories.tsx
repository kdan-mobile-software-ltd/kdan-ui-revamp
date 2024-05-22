import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from './types';
import { Slider } from '.';

const meta = {
  title: 'Section/Carousel/Slider',
  component: Slider,
  argTypes: {
    data: { control: 'object', description: '[required] only `title` is require in each Item<br><br> `toggleText` default is `{open: \'Open\', close: \'Close\'}`' },
    customStyle: { control: 'object' },
  },
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
} as Meta<ComponentProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    children: ['#323323', '#32A3A3', '#3233AA', '#32AA23', '#AA3323', '#AAAA23'].map((item, index) => (
      <div
        style={{
          width: '500px', height: '500px', backgroundColor: item, opacity: 0.5,
        }}
        key={item}
      >
        <span style={{
          fontSize: '48px', color: 'white',
        }}
        >
          {index}
        </span>
      </div>
    )),
    dataLength: 6,
    customStyle: {
      arrowColor: '#458f9c',
    },
  },
};
