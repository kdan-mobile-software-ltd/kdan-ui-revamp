import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Slider } from '@/section/Carousel/Slider';
import { ComponentProps } from './types';
import { ContentItem31 } from '../Item/ContentItem31';

const meta = {
  title: 'Section/Content/Content3-1',
  subcomponents: { Slider, ContentItem31 },
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
    <Slider customStyle={customStyle.slider} dataLength={data.length}>
      {data.map((item) => (
        <ContentItem31
          key={item.title}
          data={item}
          customStyle={customStyle?.item}
        />
      ))}
    </Slider>
  ),
};

export const Basic: Story = {
  ...Template,
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
        arrowColor: '#379fa1',
      },
    },
  },
};
