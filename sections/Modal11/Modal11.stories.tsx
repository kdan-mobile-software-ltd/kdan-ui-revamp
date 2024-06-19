import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Button } from '@/components/Button';
import { css } from 'styled-components';
import { Modal11 } from '.';

const meta = {
  title: 'Sections/Modal1-1',
  component: Modal11,
  argTypes: {
    data: { control: 'object' },
    customStyle: { control: 'object' },
  },
  tags: ['!autodocs', 'dev'],
  parameters: { layout: 'fullscreen' },
} as Meta<typeof Modal11>;

export default meta;

type Story = StoryObj<typeof meta>;

const customCss = css`
  background-color: #57d8ff;

  :disabled {
    background-color: #bdc7ca;
  }
`;

export const Basic: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'laptop',
    },
  },
  args: {
    data: {
      title: 'Headline 07 Headline 07 Headline 07',
      desc: 'Body 05 Body 05 Body 05 Body 05 Body 05 Body 05 Body 05 Body 05 Body 05 Body 05 Body 05 Body 05 Body 05 Body 05 Body 05 Body 05 Body 05 Body 05 Body 05 Body 05 Body 05 Body 05 Body 05 Body 05 Body 05 Body 05 Body 05 Body 05  ',
      image: {
        src: 'https://creative-store.preparing.kdanmobile.com/images/cards/img-c365-business.svg',
        alt: 'img-multi-media-panel-1',
      },
    },
    customStyle: {
      title: { color: 'gray700' },
    },
    children: (
      <>
        <Button variant="outlined" corner="square" size="small" type="button" customStyle={{ customCss }}>Cancel</Button>
        <Button variant="filled" corner="square" size="small" type="submit">Ok</Button>
      </>
    ),
  },
};

export const NoImageBelowTablet: Story = {
  args: {
    data: {
      title: 'Headline 07 Headline 07 Headline 07',
      desc: 'Body 05 Body 05 Body 05 Body 05 Body 05 Body 05 Body 05 Body 05 Body 05 Body 05 Body 05 Body 05 Body 05 Body 05 Body 05 Body 05 Body 05 Body 05 Body 05 Body 05 Body 05 Body 05 Body 05 Body 05 Body 05 Body 05 Body 05 Body 05  ',
    },
    customStyle: {
      title: { color: 'gray700' },
    },
    children: (
      <>
        <Button variant="outlined" corner="square" size="small" type="button">Cancel</Button>
        <Button variant="filled" corner="square" size="small" type="submit">Ok</Button>
      </>
    ),
  },
};
