import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { TextField } from './index';
import { Typography } from '../Typography';

const meta = {
  title: 'Components/TextField',
  component: TextField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    id: { control: 'text' },
    name: { control: 'text', description: '注意 Group 內每個 Radio 的 name 要一致' },
    data: { control: 'object' },
    customStyle: { control: 'object' },
  },
} as Meta<typeof TextField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    id: 'id-1',
    name: 'name-1',
    placeholder: 'Placeholder',
    data: {
      label: 'Label',
      isShowClearButton: true,
    },
    customStyle: {
      label: { color: 'gray800' },
    },
  },
};

export const ColorStyle: Story = {
  args: {
    id: 'TextField-ColorStyle',
    name: 'TextField-ColorStyle',
    placeholder: 'Placeholder',
    data: {
      label: 'testtest',
    },
    customStyle: {
      label: { fontSize: { default: 'h5' }, color: '#ff9900' },
      input: {
        borderColor: '#ff9900',
      },
    },
  },
};
export const DefaultOfFillWidth: Story = {
  parameters: { layout: 'padded' },
  args: {
    id: 'id-DefaultOfFillWidth',
    name: 'name-DefaultOfFillWidth',
    defaultValue: 'Default Value',
    placeholder: 'Placeholder',
    data: {
      label: 'Label',
      isShowClearButton: true,
    },
    customStyle: {
      label: { color: 'gray800' },
    },
  },
};

export const NoLabel: Story = {
  args: {
    id: 'id-NoLabel',
    name: 'name-NoLabel',
    defaultValue: 'Default Value',
    placeholder: 'Placeholder',
    data: {
      isShowClearButton: true,
    },
    customStyle: {
      label: { color: 'gray800' },
    },
  },
};

export const Disabled: Story = {
  args: {
    id: 'TextField-Disabled',
    name: 'TextField-Disabled',
    disabled: true,
    placeholder: 'disabled now',
    data: {
      label: 'Label',
      isShowClearButton: true,
    },
    customStyle: {
      label: { color: 'gray800' },
    },
  },
};
export const DisabledWithDefaultValue: Story = {
  args: {
    id: 'TextField-DisabledWithDefaultValue',
    name: 'TextField-DisabledWithDefaultValue',
    disabled: true,
    defaultValue: 'Default Value',
    placeholder: 'Placeholder',
    data: {
      label: 'Label',
      isShowClearButton: true,
    },
  },
};
export const WithSupportText: Story = {
  parameters: { docs: { description: { story: '請依使用情境，各自獨立客製化所需的`提示訊息`。' } } },
  render: () => (
    <div>
      <TextField {...{
        id: 'TextField-group-1',
        name: 'TextField-group',
        data: {
          label: 'Name',
        },
        customStyle: {
          input: {
            borderColor: '#d8311b',
          },
        },
      }}
      />
      <Typography
        color="#d8311b"
        fontSize={{ default: 'caption1' }}
        margin="4px 0 0"
      >
        Please entry your name.
      </Typography>
    </div>
  ),
};
