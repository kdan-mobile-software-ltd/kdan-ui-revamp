import { Meta, StoryObj } from '@storybook/react';
import { Card11 } from '.';

const meta = {
  title: 'Sections/Card/Card1-1',
  component: Card11,
  argTypes: {
    data: { control: 'object' },
    customStyle: { control: 'object', description: 'Default value of `hideLongerThan` is 3.' },
  },
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
} as Meta<typeof Card11>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    data: {
      items: [
        {
          title: 'panel_1_title',
          desc: 'panel_1_desc The subscription will automatically renew',
          icon: {
            src: 'https://creative-store.preparing.kdanmobile.com/images/functions/img-writeon-adjust-video.svg',
            alt: 'img-multi-media-panel-1',
          },
          hyperlink: {
            target: '_blank',
            href: 'https://www.google.com/',
            label: 'go to google',
          },
        },
        {
          title: 'panel_2_title ',
          desc: 'panel_2_desc The subscription will automatically renew',
          icon: {
            src: 'https://creative-store.preparing.kdanmobile.com/images/functions/img-writeon-adjust-video.svg',
            alt: 'img-multi-media-panel-1',
          },
          hyperlink: {
            target: '_blank',
            href: 'https://www.google.com/',
            label: 'go to google',
          },
        },
        {
          title: 'panel_3_title',
          desc: 'panel_3_desc The subscription will automatically renew',
          icon: {
            src: 'https://creative-store.preparing.kdanmobile.com/images/functions/img-writeon-adjust-video.svg',
            alt: 'img-multi-media-panel-1',
          },
          hyperlink: {
            target: '_blank',
            href: 'https://www.google.com/',
            label: 'go to google',
          },
        },
        {
          title: 'panel_4_title',
          desc: 'panel_4_desc The subscription will automatically renew',
          icon: {
            src: 'https://creative-store.preparing.kdanmobile.com/images/functions/img-writeon-adjust-video.svg',
            alt: 'img-multi-media-panel-1',
          },
          hyperlink: {
            target: '_blank',
            href: 'https://www.google.com/',
            label: 'go to google',
          },
        },
        {
          title: 'panel_5_title',
          desc: 'panel_5_desc The subscription will automatically renew',
          icon: {
            src: 'https://creative-store.preparing.kdanmobile.com/images/functions/img-writeon-adjust-video.svg',
            alt: 'img-multi-media-panel-1',
          },
          hyperlink: {
            target: '_blank',
            href: 'https://www.google.com/',
            label: 'go to google',
          },
        },
        {
          title: 'panel_6_title',
          desc: 'panel_6_desc The subscription will automatically renew',
          icon: {
            src: 'https://creative-store.preparing.kdanmobile.com/images/functions/img-writeon-adjust-video.svg',
            alt: 'img-multi-media-panel-1',
          },
          hyperlink: {
            target: '_blank',
            href: 'https://www.google.com/',
            label: 'go to google',
          },
        },
      ],
    },
    customStyle: {
      title: { color: 'gray700' },
      wrapper: { backgroundColor: 'gray100' },
    },
  },
};

export const Items8Layout: Story = {
  args: {
    data: {
      items: [
        {
          title: 'panel_1_title',
          desc: 'panel_1_desc The subscription will automatically renew',
          icon: {
            src: 'https://creative-store.preparing.kdanmobile.com/images/functions/img-writeon-adjust-video.svg',
            alt: 'img-multi-media-panel-1',
          },
          hyperlink: {
            target: '_blank',
            href: 'https://www.google.com/',
            label: 'go to google',
          },
        },
        {
          title: 'panel_2_title ',
          desc: 'panel_2_desc The subscription will automatically renew',
          icon: {
            src: 'https://creative-store.preparing.kdanmobile.com/images/functions/img-writeon-adjust-video.svg',
            alt: 'img-multi-media-panel-1',
          },
          hyperlink: {
            target: '_blank',
            href: 'https://www.google.com/',
            label: 'go to google',
          },
        },
        {
          title: 'panel_3_title',
          desc: 'panel_3_desc The subscription will automatically renew',
          icon: {
            src: 'https://creative-store.preparing.kdanmobile.com/images/functions/img-writeon-adjust-video.svg',
            alt: 'img-multi-media-panel-1',
          },
          hyperlink: {
            target: '_blank',
            href: 'https://www.google.com/',
            label: 'go to google',
          },
        },
        {
          title: 'panel_4_title',
          desc: 'panel_4_desc The subscription will automatically renew',
          icon: {
            src: 'https://creative-store.preparing.kdanmobile.com/images/functions/img-writeon-adjust-video.svg',
            alt: 'img-multi-media-panel-1',
          },
          hyperlink: {
            target: '_blank',
            href: 'https://www.google.com/',
            label: 'go to google',
          },
        },
        {
          title: 'panel_5_title',
          desc: 'panel_5_desc The subscription will automatically renew',
          icon: {
            src: 'https://creative-store.preparing.kdanmobile.com/images/functions/img-writeon-adjust-video.svg',
            alt: 'img-multi-media-panel-1',
          },
          hyperlink: {
            target: '_blank',
            href: 'https://www.google.com/',
            label: 'go to google',
          },
        },
        {
          title: 'panel_6_title',
          desc: 'panel_6_desc The subscription will automatically renew',
          icon: {
            src: 'https://creative-store.preparing.kdanmobile.com/images/functions/img-writeon-adjust-video.svg',
            alt: 'img-multi-media-panel-1',
          },
          hyperlink: {
            target: '_blank',
            href: 'https://www.google.com/',
            label: 'go to google',
          },
        },
        {
          title: 'panel_7_title',
          desc: 'panel_7_desc The subscription will automatically renew',
          icon: {
            src: 'https://creative-store.preparing.kdanmobile.com/images/functions/img-writeon-adjust-video.svg',
            alt: 'img-multi-media-panel-1',
          },
          hyperlink: {
            target: '_blank',
            href: 'https://www.google.com/',
            label: 'go to google',
          },
        },
        {
          title: 'panel_8_title',
          desc: 'panel_8_desc The subscription will automatically renew',
          icon: {
            src: 'https://creative-store.preparing.kdanmobile.com/images/functions/img-writeon-adjust-video.svg',
            alt: 'img-multi-media-panel-1',
          },
          hyperlink: {
            target: '_blank',
            href: 'https://www.google.com/',
            label: 'go to google',
          },
        },
      ],
      toggleText: {
        open: '開啟',
        close: '關閉',
      },
    },
    customStyle: {
      title: { color: '#22BBAA' },
    },
  },
};

export const hideLongerThanConfig: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile',
    },
  },
  args: {
    data: {
      items: [
        {
          title: 'panel_1_title',
          desc: 'panel_1_desc The subscription will automatically renew',
          icon: {
            src: 'https://creative-store.preparing.kdanmobile.com/images/functions/img-writeon-adjust-video.svg',
            alt: 'img-multi-media-panel-1',
          },
          hyperlink: {
            target: '_blank',
            href: 'https://www.google.com/',
            label: 'go to google',
          },
        },
        {
          title: 'panel_2_title ',
          desc: 'panel_2_desc The subscription will automatically renew',
          icon: {
            src: 'https://creative-store.preparing.kdanmobile.com/images/functions/img-writeon-adjust-video.svg',
            alt: 'img-multi-media-panel-1',
          },
          hyperlink: {
            target: '_blank',
            href: 'https://www.google.com/',
            label: 'go to google',
          },
        },
        {
          title: 'panel_3_title',
          desc: 'panel_3_desc The subscription will automatically renew',
          icon: {
            src: 'https://creative-store.preparing.kdanmobile.com/images/functions/img-writeon-adjust-video.svg',
            alt: 'img-multi-media-panel-1',
          },
          hyperlink: {
            target: '_blank',
            href: 'https://www.google.com/',
            label: 'go to google',
          },
        },
        {
          title: 'panel_4_title',
          desc: 'panel_4_desc The subscription will automatically renew',
          icon: {
            src: 'https://creative-store.preparing.kdanmobile.com/images/functions/img-writeon-adjust-video.svg',
            alt: 'img-multi-media-panel-1',
          },
          hyperlink: {
            target: '_blank',
            href: 'https://www.google.com/',
            label: 'go to google',
          },
        },
        {
          title: 'panel_5_title',
          desc: 'panel_5_desc The subscription will automatically renew',
          icon: {
            src: 'https://creative-store.preparing.kdanmobile.com/images/functions/img-writeon-adjust-video.svg',
            alt: 'img-multi-media-panel-1',
          },
          hyperlink: {
            target: '_blank',
            href: 'https://www.google.com/',
            label: 'go to google',
          },
        },
        {
          title: 'panel_6_title',
          desc: 'panel_6_desc The subscription will automatically renew',
          icon: {
            src: 'https://creative-store.preparing.kdanmobile.com/images/functions/img-writeon-adjust-video.svg',
            alt: 'img-multi-media-panel-1',
          },
          hyperlink: {
            target: '_blank',
            href: 'https://www.google.com/',
            label: 'go to google',
          },
        },
      ],
      toggleText: {
        open: '開啟',
        close: '關閉',
      },
    },
    customStyle: {
      title: { color: '#22BBAA' },
      others: { hideLongerThan: 4 },
    },
  },
};

export const IsHideToggleConfig: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile',
    },
  },
  args: {
    data: {
      items: [
        {
          title: 'panel_1_title',
          desc: 'panel_1_desc The subscription will automatically renew',
          icon: {
            src: 'https://creative-store.preparing.kdanmobile.com/images/functions/img-writeon-adjust-video.svg',
            alt: 'img-multi-media-panel-1',
          },
          hyperlink: {
            target: '_blank',
            href: 'https://www.google.com/',
            label: 'go to google',
          },
        },
        {
          title: 'panel_2_title ',
          desc: 'panel_2_desc The subscription will automatically renew',
          icon: {
            src: 'https://creative-store.preparing.kdanmobile.com/images/functions/img-writeon-adjust-video.svg',
            alt: 'img-multi-media-panel-1',
          },
          hyperlink: {
            target: '_blank',
            href: 'https://www.google.com/',
            label: 'go to google',
          },
        },
        {
          title: 'panel_3_title',
          desc: 'panel_3_desc The subscription will automatically renew',
          icon: {
            src: 'https://creative-store.preparing.kdanmobile.com/images/functions/img-writeon-adjust-video.svg',
            alt: 'img-multi-media-panel-1',
          },
          hyperlink: {
            target: '_blank',
            href: 'https://www.google.com/',
            label: 'go to google',
          },
        },
        {
          title: 'panel_4_title',
          desc: 'panel_4_desc The subscription will automatically renew',
          icon: {
            src: 'https://creative-store.preparing.kdanmobile.com/images/functions/img-writeon-adjust-video.svg',
            alt: 'img-multi-media-panel-1',
          },
          hyperlink: {
            target: '_blank',
            href: 'https://www.google.com/',
            label: 'go to google',
          },
        },
        {
          title: 'panel_5_title',
          desc: 'panel_5_desc The subscription will automatically renew',
          icon: {
            src: 'https://creative-store.preparing.kdanmobile.com/images/functions/img-writeon-adjust-video.svg',
            alt: 'img-multi-media-panel-1',
          },
          hyperlink: {
            target: '_blank',
            href: 'https://www.google.com/',
            label: 'go to google',
          },
        },
        {
          title: 'panel_6_title',
          desc: 'panel_6_desc The subscription will automatically renew',
          icon: {
            src: 'https://creative-store.preparing.kdanmobile.com/images/functions/img-writeon-adjust-video.svg',
            alt: 'img-multi-media-panel-1',
          },
          hyperlink: {
            target: '_blank',
            href: 'https://www.google.com/',
            label: 'go to google',
          },
        },
      ],
      toggleText: {
        open: '開啟',
        close: '關閉',
      },
    },
    customStyle: {
      title: { color: '#22BBAA' },
      others: {
        hideLongerThan: 3,
        isHideToggle: true,
      },
    },
  },
};
