import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { SliderProps } from './types';
import { Slider } from '.';

const meta = {
  title: 'Sections/Carousel/Slider',
  component: Slider,
  argTypes: {
    data: { control: 'object', description: '[required] only `title` is require in each Item<br><br> `toggleText` default is `{open: \'Open\', close: \'Close\'}`' },
    customStyle: { control: 'object', description: '`arrowSvgColorFilter` could be generate from https://isotropic.co/tool/hex-color-to-css-filter/' },
  },
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
} as Meta<SliderProps>;

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
    customStyle: {
      arrowBackgroundColor: '#00dc87',
      arrowSvgColorFilter: 'brightness(0) saturate(100%) invert(12%) sepia(10%) saturate(4600%) hue-rotate(149deg) brightness(96%) contrast(103%)',
      paginationDotColor: '#00dc87',
    },
  },
};
