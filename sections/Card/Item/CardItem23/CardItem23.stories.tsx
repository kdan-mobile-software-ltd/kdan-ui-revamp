import { Meta, StoryObj } from '@storybook/react';
import { CardItem23 } from '.';

const meta = {
  title: 'Sections/Card/CardItem2-3',
  component: CardItem23,
  argTypes: {
    data: { control: 'object' },
    customStyle: { control: 'object' },
  },
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
} as Meta<typeof CardItem23>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    data: {
      title: 'panel_1_title',
      desc: 'panel_1_desc The subscription will automatically renew',
      image: {
        src: '/assets/mockImg/mock_img.jpg',
        alt: 'alt aa',
      },
      hyperlink: {
        href: 'https://www.google.com/',
        label: 'go to google',
      },
    },
    customStyle: {
      title: { color: 'gray700' },
    },
  },
};

export const LimitTitleTo2LinesZh: Story = {
  args: {
    data: {
      title: 'KDAN「數位永續種子培育計畫」，培育具備數位永續思維的未來人才',
      desc: '計畫透過一對一導師制、多元通識課程等，幫助實習生探索自我、增強職場競爭力，全面激發成長潛能。',
      image: {
        src: '/assets/mockImg/mock_img.jpg',
        alt: 'alt aa',
      },
      hyperlink: {
        href: 'https://www.google.com/',
        label: 'go to google',
      },
    },
    customStyle: {
      title: { color: 'gray700' },
      image: { isNoMargin: true },
    },
  },
};
export const LimitTitleTo2LinesEn: Story = {
  args: {
    data: {
      title: '"Digital Seed Internship Program" — Nurturing Future Talent with a Digital Sustainability Mindset',
      desc: 'KDAN’s Digital Seed Internship Program aims to cultivate future-ready talent with a strong foundation in digital sustainability. Through personalized mentorship and diverse interdisciplinary courses, the program empowers interns to discover their potential, strengthen their professional skills, and unlock new growth opportunities.',
      image: {
        src: '/assets/mockImg/mock_img.jpg',
        alt: 'alt aa',
      },
      hyperlink: {
        href: 'https://www.google.com/',
        label: 'go to google',
      },
    },
    customStyle: {
      title: { color: 'gray700' },
      image: { isNoMargin: true },
    },
  },
};

export const SmallSize: Story = {
  args: {
    data: {
      title: 'Title Align Center',
      desc: 'background background background',
      image: {
        src: '/assets/mockImg/mock_img.jpg',
        alt: 'alt aa',
      },
      hyperlink: {
        href: 'https://www.google.com/',
        label: 'go to google',
      },
    },
    customStyle: {
      title: { color: '#007aff', textAlign: 'center' },
      wrapper: {
        backgroundColor: '#dbf2fa',
      },
    },
  },
};

export const NoHyperlink: Story = {
  args: {
    data: {
      title: 'NoHyperlink',
      desc: 'background background background',
      image: {
        src: '/assets/mockImg/mock_img.jpg',
        alt: 'alt aa',
      },
    },
    customStyle: {
      title: { color: '#007aff' },
      wrapper: {
        borderColor: '#00a89b',
      },
    },
  },
};
