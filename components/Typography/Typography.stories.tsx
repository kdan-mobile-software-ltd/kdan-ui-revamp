import React from 'react';
import styled, { css } from 'styled-components';
import { Meta, StoryObj } from '@storybook/react';
import { Typography } from '.';

const meta = {
  title: 'Components/Typography',
  component: Typography,
  argTypes: {
    fontSize: { control: 'object' },
    color: { control: 'color' },
    padding: { control: 'text' },
    margin: { control: 'text' },
    children: { control: 'text' },
  },
  parameters: {
    controls: { exclude: ['as', 'forwardedAs', 'theme', 'ref'] },
  },
  tags: ['autodocs'],
} as Meta<typeof Typography>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CommonStyle: Story = {
  args: {
    fontSize: { default: 'h3', mobile: 'h7' },
    color: 'gray600',
    padding: '10px',
    margin: '10px',
    children: 'Typography',
  },
};

export const FontWeight: Story = {
  args: {
    fontSize: { default: 'h3', mobile: 'h7' },
    color: 'red',
    padding: '10px',
    children: 'Hello World!',
    fontWeight: '200',
    customCss: css`
      margin: 10px;
      @media screen and (max-width: 768px) {
        margin: 0px;
      }
    `,
  },
};

const BorderDiv = styled.div`
  > * {
    border: black solid 1px;
  }
`;

export const All: Story = {
  args: {
    children: (
      <BorderDiv>
        <Typography fontSize={{ default: 'h1' }} as="h1">h1</Typography>
        <Typography fontSize={{ default: 'h2' }} as="h2">h2</Typography>
        <Typography fontSize={{ default: 'h3' }} as="h3">h3</Typography>
        <Typography fontSize={{ default: 'h4' }} as="h4">h4</Typography>
        <Typography fontSize={{ default: 'h5' }} as="h5">h5</Typography>
        <Typography fontSize={{ default: 'h6' }} as="h6">h6</Typography>
        <Typography fontSize={{ default: 'h7' }} as="h6">h7</Typography>
        <Typography fontSize={{ default: 'h8' }} as="h6">h8</Typography>
        <Typography fontSize={{ default: 'h9' }} as="h6">h9</Typography>
        <Typography fontSize={{ default: 'body1' }}>body1</Typography>
        <Typography fontSize={{ default: 'body2' }}>body2</Typography>
        <Typography fontSize={{ default: 'body3' }}>body3</Typography>
        <Typography fontSize={{ default: 'body4' }}>body4</Typography>
        <Typography fontSize={{ default: 'body5' }}>body5</Typography>
        <Typography fontSize={{ default: 'caption1' }}>caption1</Typography>
        <Typography fontSize={{ default: 'button1' }}>button1</Typography>
        <Typography fontSize={{ default: 'button2' }}>button2</Typography>
        <Typography fontSize={{ default: 'button3' }}>button3</Typography>
        <Typography fontSize={{ default: 'button4' }}>button4</Typography>
      </BorderDiv>
    ),
  },
};

const RedTypography = styled(Typography)`
  color: red;
  margin: 20px;
  font-weight: 300;
  @media screen and (max-width: 768px) {
    color: green;
    margin: 0;
  }
`;

export const StyledComponentInherit: Story = {
  args: {
    children: (
      <BorderDiv>
        <RedTypography fontSize={{ default: 'h1' }} as="h1">h1</RedTypography>
      </BorderDiv>
    ),
  },
};
