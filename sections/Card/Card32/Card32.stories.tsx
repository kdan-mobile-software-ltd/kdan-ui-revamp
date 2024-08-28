import { Meta, StoryObj } from '@storybook/react';
import { Card32 } from '.';

const meta = {
  title: 'Sections/Card/Card3-2',
  component: Card32,
  argTypes: {
    data: { control: 'object' },
    customStyle: { control: 'object' },
  },
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
} as Meta<typeof Card32>;

export default meta;

type Story = StoryObj<typeof meta>;

export const NoCarousel: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
  },
  args: {
    data: [
      {
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
      {
        name: 'Pdf',
        image: {
          src: 'https://creative-store.preparing.kdanmobile.com/images/campaign/ic-pdf-reader.svg',
          alt: 'icon',
        },
        desc: 'Make Your Best Work Better, Together with Document 365',
        price: '$250',
        unit: 'Year',
        hyperlink: {
          href: 'https://google.com',
          label: 'Purchase',
        },
        aux: 'Sign Documents Online & Save Some Time & Sign Documents Online',
        depicts: [
          'This is Kdan most important product',
          'Over 100M users rely on PDF Reader',
          'Over 100M users rely on PDF Reader',
        ],
      },
      {
        name: 'Markup Pro',
        image: {
          src: 'https://creative-store.preparing.kdanmobile.com/images/campaign/ic-markup.svg',
          alt: 'icon',
        },
        desc: 'Read, Annotate and Share What Matters',
        price: '$22,000',
        unit: 'Year',
        hyperlink: {
          href: 'https://google.com',
          label: 'Purchase',
        },
        aux: 'Sign Documents Online & Save Some Time',
        depicts: [
          'This is Kdan most important product',
          'Over 100M users rely on PDF Reader',
        ],
      },
    ],
    customStyle: {
      items: [
        {
          wrapper: {
            isHighlight: true,
            backgroundColor: 'rgb(204, 204, 255)',
            borderColor: 'rgb(89, 89, 255)',
          },
          name: { color: 'rgb(89, 89, 255)' },
          hyperlink: {
            backgroundColor: 'rgb(89, 89, 255)',
            color: 'white',
          },
        },
        {
          wrapper: {
            backgroundColor: 'rgb(255, 222, 222)',
            borderColor: 'rgb(255, 99, 99)',
          },
          name: { color: 'rgb(255, 99, 99)' },
          hyperlink: {
            backgroundColor: 'rgb(255, 99, 99)',
            color: 'white',
          },
        },
        {
          wrapper: {
            backgroundColor: 'rgb(230, 230, 250)',
            borderColor: 'rgb(75, 0, 130)',
          },
          name: { color: 'rgb(75, 0, 130)' },
          hyperlink: {
            backgroundColor: 'rgb(75, 0, 130)',
            color: 'white',
          },
        },
      ],
    },
  },
};
