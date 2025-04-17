import { Meta, StoryObj } from '@storybook/react';
import { ContentItem31 } from '.';

const meta = {
  title: 'Sections/Content/ContentItem3-1',
  component: ContentItem31,
  argTypes: {
    data: { control: 'object' },
    customStyle: { control: 'object', description: '`arrowSvgColorFilter` could be generate from https://isotropic.co/tool/hex-color-to-css-filter/' },
  },
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
} as Meta<typeof ContentItem31>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    data: {
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
    },
    customStyle: {
      title: { color: '#379fa1', borderLeftColor: '#379fa1' },
      wrapper: {
        borderColor: '#379fa1',
        backgroundColor: '#eeffee',
      },
    },
  },
};

export const LimitedLines: Story = {
  args: {
    data: {
      title: '"Digital Seed Internship Program" — Nurturing Future Talent with a Digital Sustainability Mindset',
      desc: 'KDAN’s Digital Seed Internship Program aims to cultivate future-ready talent with a strong foundation in digital sustainability. Through personalized mentorship and diverse interdisciplinary courses, the program empowers interns to discover their potential, strengthen their professional skills, and unlock new growth opportunities.',
      image: {
        src: 'https://creative-store.preparing.kdanmobile.com/images/cards/img-c365-business.svg',
        alt: 'img-multi-media-panel-1',
      },
      hyperlink: {
        href: 'https://www.google.com/',
        label: 'go to google',
      },
    },
    customStyle: {
      title: { color: '#379fa1', borderLeftColor: '#379fa1' },
      wrapper: {
        borderColor: '#379fa1',
        backgroundColor: '#eeffee',
      },
    },
  },
};
