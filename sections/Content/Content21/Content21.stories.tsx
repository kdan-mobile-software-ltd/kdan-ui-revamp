import { Meta, StoryObj } from '@storybook/react';
import { Content21 } from '.';

const meta = {
  title: 'Sections/Content/Content2-1',
  component: Content21,
  argTypes: {
    data: { control: 'object', description: '[required] only `title` is require in each Item' },
    customStyle: {
      control: 'object',
      description: '`image` 調整 RWD image 寬高',
    },
    itemLayout: {
      control: 'inline-radio',
      options: [
        'sequentialAlternating',
        'sequential',
        'reverseAlternating',
        'reverse',
      ],
      description: '[optional]',
    },
  },
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
} as Meta<typeof Content21>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    data: [
      {
        title: 'Headline Text ',
        desc: 'Body Text Body Text Body Text Body Text Body Text Body Text Body Text Body Text Body Text Body Text Body Text Body Text ',
        image: {
            src: '/assets/mockImg/mock_img.jpg',
          alt: 'alt aa',
        },
        hyperlink: {
          href: 'https://www.google.com/',
          label: 'go to google',
        },
      },
      {
        title: 'title bb',
        desc: 'desc bb',
        image: {
            src: '/assets/mockImg/mock_img.jpg',
          alt: 'alt bb',
        },
        hyperlink: {
          href: 'https://www.google.com/',
          label: 'go to google',
        },
      },
      {
        title: 'title cc',
        desc: 'desc cc',
        image: {
            src: '/assets/mockImg/mock_img.jpg',
          alt: 'alt cc',
        },
      },
      {
        title: 'title dd',
        desc: 'desc dd',
        image: {
            src: '/assets/mockImg/mock_img.jpg',
          alt: 'alt dd',
        },
      },
    ],
  },
};
export const CustomImageSize: Story = {
  args: {
    data: [
      {
        title: 'title aa',
        desc: 'desc aa',
        image: {
            src: '/assets/mockImg/mock_img.jpg',
          alt: 'alt aa',
        },
        hyperlink: {
          href: 'https://www.google.com/',
          label: 'go to google',
        },
      },
      {
        title: 'title bb',
        desc: 'desc bb',
        image: {
            src: '/assets/mockImg/mock_img.jpg',
          alt: 'alt bb',
        },
        hyperlink: {
          href: 'https://www.google.com/',
          label: 'go to google',
        },
      },
    ],
    customStyle: {
      image: {
        width: { default: '300px', mobile: '200px' },
        height: { default: '300px', mobile: '200px' },
      },
    },
  },
};

export const ImageOnTheRight: Story = {
  args: {
    data: [
      {
        title: 'title aa',
        desc: 'desc aa',
        image: {
            src: '/assets/mockImg/mock_img.jpg',
          alt: 'alt aa',
        },
        hyperlink: {
          href: 'https://www.google.com/',
          label: 'go to google',
        },
      },
      {
        title: 'title bb',
        desc: 'desc bb',
        image: {
            src: '/assets/mockImg/mock_img.jpg',
          alt: 'alt bb',
        },
        hyperlink: {
          href: 'https://www.google.com/',
          label: 'go to google',
        },
      },
    ],
    itemLayout: 'right',
  },
};
