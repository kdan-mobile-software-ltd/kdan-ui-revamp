import { Meta, StoryObj } from '@storybook/react';
import { CardItem32 } from '.';

const meta = {
  title: 'Sections/Card/CardItem3-2',
  component: CardItem32,
  argTypes: {
    data: { control: 'object' },
    customStyle: { control: 'object' },
  },
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
} as Meta<typeof CardItem32>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    data: {
      name: 'DottedSign',
      image: {
        src: 'https://creative-store.preparing.kdanmobile.com/images/cards/img-c365-business.svg',
        alt: 'icon',
      },
      desc: 'Sign Documents Online & Save Some Time',
      price: '$250',
      unit: 'Month',
      hyperlink: {
        href: 'https://google.com',
        label: 'Purchase',
      },
      aux: 'Sign Documents Online & Save Some Time',
      depicts: [
        'Your Business Flexibility, Simple and Fast',
        'Boost Efficiency by Multitasking Documents at Once',
        'Your Business Flexibility, Simple and Fast',
        'Boost Efficiency by Multitasking Documents at Once',
        'Your Business Flexibility, Simple and Fast',
        'Boost Efficiency by Multitasking Documents at Once',
      ],
    },
    customStyle: {
      wrapper: {
        backgroundColor: 'rgb(204, 204, 255)',
        borderColor: 'rgb(89, 89, 255)',
      },
      name: { color: 'rgb(89, 89, 255)' },
      hyperlink: {
        backgroundColor: 'rgb(89, 89, 255)',
        color: 'white',
      },
    },
  },
};
