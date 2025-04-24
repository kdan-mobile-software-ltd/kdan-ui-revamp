import { Meta, StoryObj } from '@storybook/react';
import { Card23 } from '.';

const meta = {
  title: 'Sections/Card/Card2-3',
  component: Card23,
  argTypes: {
    data: { control: 'object' },
    customStyle: { control: 'object' },
  },
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
} as Meta<typeof Card23>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    data: [
      {
        title: 'panel_1_title',
        desc: 'panel_1_desc The subscription will automatically renew and your card. The subscription will automatically renew and your card.',
        image: {
          src: 'https://creative-store.preparing.kdanmobile.com/images/cards/img-c365-business.svg',
          alt: 'img-multi-media-panel-1',
        },
        hyperlink: {
          href: 'https://www.google.com/',
          label: 'go to google',
        },
      },
      {
        title: 'panel_2_title',
        desc: 'panel_2_desc The subscription will automatically renew and your card.',
        image: {
          src: 'https://creative-store.preparing.kdanmobile.com/images/cards/img-c365-business.svg',
          alt: 'img-multi-media-panel-1',
        },
        hyperlink: {
          href: 'https://www.google.com/',
          label: 'go to google',
        },
      },
      {
        title: 'panel_3_title',
        desc: 'panel_3_desc The subscription will automatically renew and your card.',
        image: {
          src: 'https://creative-store.preparing.kdanmobile.com/images/cards/img-c365-business.svg',
          alt: 'img-multi-media-panel-1',
        },
        hyperlink: {
          href: 'https://www.google.com/',
          label: 'go to google',
        },
      },
      {
        title: 'panel_4_title',
        desc: 'panel_4_desc The subscription will automatically renew and your card.',
        image: {
          src: 'https://creative-store.preparing.kdanmobile.com/images/cards/img-c365-business.svg',
          alt: 'img-multi-media-panel-1',
        },
        hyperlink: {
          href: 'https://www.google.com/',
          label: 'go to google',
        },
      },
      {
        title: 'panel_5_title',
        desc: 'panel_5_desc The subscription will automatically renew and your card.',
        image: {
          src: 'https://creative-store.preparing.kdanmobile.com/images/cards/img-c365-business.svg',
          alt: 'img-multi-media-panel-1',
        },
        hyperlink: {
          href: 'https://www.google.com/',
          label: 'go to google',
        },
      },
      {
        title: 'panel_6_title',
        desc: 'panel_6_desc The subscription will automatically renew and your card.',
        image: {
          src: 'https://creative-store.preparing.kdanmobile.com/images/cards/img-c365-business.svg',
          alt: 'img-multi-media-panel-1',
        },
        hyperlink: {
          href: 'https://www.google.com/',
          label: 'go to google',
        },
      },
    ],
    customStyle: {
      item: {
        title: { color: '#379fa1' },
      },
      slider: {
        arrowBackgroundColor: '#379fa1',
      },
    },
  },
};

export const Card22Style: Story = {
  args: {
    data: [
      {
        title: 'panel_2_title',
        desc: 'The subscription will renew and your card.',
        image: {
          src: 'https://creative-store.preparing.kdanmobile.com/images/cards/img-c365-business.svg',
          alt: 'img-multi-media-panel-1',
        },
        hyperlink: {
          href: 'https://www.google.com/',
          label: 'go to google',
        },
      },
      {
        title: 'panel_3_title',
        desc: 'panel_3_desc The subscription will automatically renew and your card.',
        image: {
          src: 'https://creative-store.preparing.kdanmobile.com/images/cards/img-c365-business.svg',
          alt: 'img-multi-media-panel-1',
        },
        hyperlink: {
          href: 'https://www.google.com/',
          label: 'go to google',
        },
      },
      {
        title: 'panel_4_title',
        desc: '計畫透過一對一導師制、多元通識課程等，幫助實習生探索自我、增強職場競爭力，全面激發成長潛能。計畫透過一對一導師制、多元通識課程等，幫助實習生探索自我、增強職場競爭力，全面激發成長潛能。',
        image: {
          src: 'https://creative-store.preparing.kdanmobile.com/images/cards/img-c365-business.svg',
          alt: 'img-multi-media-panel-1',
        },
      },
      {
        title: 'KDAN「數位永續種子培育計畫」，培育具備數位永續思維的未來人才',
        desc: '計畫透過一對一導師制、多元通識課程等，幫助實習生探索自我、增強職場競爭力，全面激發成長潛能。',
        image: {
          src: 'https://creative-store.preparing.kdanmobile.com/images/cards/img-c365-business.svg',
          alt: 'img-multi-media-panel-1',
        },
        hyperlink: {
          href: 'https://www.google.com/',
          label: 'go to google',
        },
      },
    ],
    customStyle: {
      item: {
        title: { color: '#379fa1' },
        image: { isNoMargin: true },
        wrapper: { borderColor: 'gray500' },
      },
      slider: {
        arrowBackgroundColor: '#379fa1',
        height: {
          default: '536px', laptop: '512px', mobile: '512px', mobileM: '512px',
        },
      },
    },
  },
};
export const FixedHeightWithRWD: Story = {
  args: {
    data: [
      {
        title: 'panel_2_title',
        desc: 'The subscription will renew and your card.',
        image: {
          src: 'https://creative-store.preparing.kdanmobile.com/images/cards/img-c365-business.svg',
          alt: 'img-multi-media-panel-1',
        },
        hyperlink: {
          href: 'https://www.google.com/',
          label: 'go to google',
        },
      },
      {
        title: 'panel_3_title',
        desc: 'panel_3_desc The subscription will automatically renew and your card.',
        image: {
          src: 'https://creative-store.preparing.kdanmobile.com/images/cards/img-c365-business.svg',
          alt: 'img-multi-media-panel-1',
        },
        hyperlink: {
          href: 'https://www.google.com/',
          label: 'go to google',
        },
      },
      {
        title: 'panel_4_title',
        desc: '計畫透過一對一導師制、多元通識課程等，幫助實習生探索自我、增強職場競爭力，全面激發成長潛能。計畫透過一對一導師制、多元通識課程等，幫助實習生探索自我、增強職場競爭力，全面激發成長潛能。',
        image: {
          src: 'https://creative-store.preparing.kdanmobile.com/images/cards/img-c365-business.svg',
          alt: 'img-multi-media-panel-1',
        },
      },
      {
        title: 'KDAN「數位永續種子培育計畫」，培育具備數位永續思維的未來人才',
        desc: '計畫透過一對一導師制、多元通識課程等，幫助實習生探索自我、增強職場競爭力，全面激發成長潛能。',
        image: {
          src: 'https://creative-store.preparing.kdanmobile.com/images/cards/img-c365-business.svg',
          alt: 'img-multi-media-panel-1',
        },
        hyperlink: {
          href: 'https://www.google.com/',
          label: 'go to google',
        },
      },
    ],
    customStyle: {
      item: {
        title: { color: '#379fa1' },
        image: { isNoMargin: true },
        wrapper: { borderColor: 'gray500' },
      },
      slider: {
        arrowBackgroundColor: '#379fa1',
        height: {
          default: '600px', laptop: '487px', mobile: '496px', mobileM: '496px',
        },
      },
    },
  },
};

export const NoCarouselAtDesktop: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
  },
  args: {
    data: [
      {
        title: 'panel_1_title',
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
      {
        title: 'panel_2_title',
        desc: 'panel_2_desc The subscription will automatically renew and your card.',
        image: {
          src: 'https://creative-store.preparing.kdanmobile.com/images/cards/img-c365-business.svg',
          alt: 'img-multi-media-panel-1',
        },
        hyperlink: {
          href: 'https://www.google.com/',
          label: 'go to google',
        },
      },
      {
        title: 'panel_3_title',
        desc: 'panel_3_desc The subscription will automatically renew and your card.',
        image: {
          src: 'https://creative-store.preparing.kdanmobile.com/images/cards/img-c365-business.svg',
          alt: 'img-multi-media-panel-1',
        },
        hyperlink: {
          href: 'https://www.google.com/',
          label: 'go to google',
        },
      },
    ],
    customStyle: {
      item: {
        title: { color: '#379fa1' },
      },
      slider: {
        arrowBackgroundColor: '#379fa1',
      },
    },
  },
};

export const Only2Cards: Story = {
  args: {
    data: [
      {
        title: 'panel_1_title',
        desc: 'panel_1_desc The subscription will automatically renew and your card. The subscription will automatically renew and your card.',
        image: {
          src: 'https://creative-store.preparing.kdanmobile.com/images/cards/img-c365-business.svg',
          alt: 'img-multi-media-panel-1',
        },
        hyperlink: {
          href: 'https://www.google.com/',
          label: 'go to google',
        },
      },
      {
        title: 'panel_2_title',
        desc: 'panel_2_desc The subscription will automatically renew and your card.',
        image: {
          src: 'https://creative-store.preparing.kdanmobile.com/images/cards/img-c365-business.svg',
          alt: 'img-multi-media-panel-1',
        },
        hyperlink: {
          href: 'https://www.google.com/',
          label: 'go to google',
        },
      },
    ],
    customStyle: {
      item: {
        title: { color: '#379fa1' },
      },
      slider: {
        arrowBackgroundColor: '#379fa1',
      },
    },
  },
};
