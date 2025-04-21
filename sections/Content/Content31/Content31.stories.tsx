import { Meta, StoryObj } from '@storybook/react';
import { css } from 'styled-components';
import { Content31 } from '.';

const meta = {
  title: 'Sections/Content/Content3-1',
  component: Content31,
  argTypes: {
    data: { control: 'object', description: '[required] only `title` is require in each Item<br><br> `toggleText` default is `{open: \'Open\', close: \'Close\'}`' },
    customStyle: { control: 'object' },
  },
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
} as Meta<typeof Content31>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
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
    }, {
      title: '"Digital Seed Internship Program" — Nurturing Future Talent with a Digital Sustainability Mindset',
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
        desc: {
          customCss: css`opacity: 0.8;`,
        },
      },
      slider: {
        arrowBackgroundColor: '#379fa1',
        height: { default: '320px', tablet: '564px' },
      },
    },
  },
};

export const TextAtRight: Story = {
  args: {
    data: [{
      title: 'panel_1_title',
      desc: 'panel_1_desc The subscription',
      image: {
        src: 'https://creative-store.preparing.kdanmobile.com/images/cards/img-c365-business.svg',
        alt: 'img-multi-media-panel-1',
      },
      hyperlink: {
        href: 'https://www.google.com/',
        label: 'go to google',
      },
    }, {
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
          isTextPositionRight: true,
          borderColor: '#379fa1',
          backgroundColor: '#eeffee',
        },
      },
      slider: {
        arrowBackgroundColor: '#379fa1',
        height: { default: '320px', tablet: '565px' },
      },
    },
  },
};
