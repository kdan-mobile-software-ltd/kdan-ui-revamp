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
  parameters: { layout: 'fullpage' },
} as Meta<ComponentProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    children: ['#323323', '#32A3A3', '#3233AA', '#32AA23', '#AA3323', '#AAAA23'].map((item, index) => (
      <div
        style={{
          width: '100%', height: '100%', backgroundColor: item, opacity: 0.5,
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
    currentIndex: 2,
    customStyle: {
      // sizes: {
      //   default: { width: '1080px', height: '354px' },
      //   laptop: { width: '944px', height: '316px' },
      //   tablet: { width: '688px', height: '667px' },
      //   mobile: { width: '480px', height: '498px' },
      // },
      arrowColor: '#444444',
    },
  },
};
