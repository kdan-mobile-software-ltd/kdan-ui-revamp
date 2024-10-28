import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { TextArea } from './index';
import { Typography } from '../Typography';

const meta = {
  title: 'Components/TextArea',
  component: TextArea,
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
} as Meta<typeof TextArea>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    id: 'id-1',
    name: 'name-1',
    placeholder: 'Placeholder',
    rows: 5,
    cols: 33,
    data: {
      label: 'Label',
    },
    customStyle: {
      label: { color: 'gray800' },
    },
  },
};

export const ColorStyle: Story = {
  args: {
    id: 'TextArea-ColorStyle',
    name: 'TextArea-ColorStyle',
    placeholder: 'Placeholder',
    data: {
      label: 'testtest',
    },
    customStyle: {
      label: { fontSize: { default: 'h5' }, color: '#ff9900' },
      area: {
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
    },
    customStyle: {
      label: { color: 'gray800' },
    },
  },
};

export const NoLabel: Story = {
  parameters: { layout: 'padded' },
  args: {
    id: 'id-NoLabel',
    name: 'name-NoLabel',
    defaultValue: 'Default Value',
    placeholder: 'Placeholder',
    customStyle: {
      label: { color: 'gray800' },
    },
  },
};

export const Disabled: Story = {
  args: {
    id: 'TextArea-Disabled',
    name: 'TextArea-Disabled',
    disabled: true,
    placeholder: 'disabled now',
    data: {
      label: 'Label',
    },
    customStyle: {
      label: { color: 'gray800' },
    },
  },
};
export const DisabledWithDefaultdefaultValue: Story = {
  args: {
    id: 'TextArea-DisabledWithDefaultValue',
    name: 'TextArea-DisabledWithDefaultValue',
    disabled: true,
    defaultValue: 'Default Value',
    placeholder: 'Placeholder',
    data: {
      label: 'Label',
    },
  },
};
export const WithSupportText: Story = {
  parameters: { docs: { description: { story: '請依使用情境，各自獨立客製化所需的`提示訊息`。' } } },
  render: () => (
    <div>
      <TextArea {...{
        id: 'TextArea-group-1',
        name: 'TextArea-group',
        rows: 5,
        cols: 33,
        data: {
          label: 'Name',
        },
        customStyle: {
          area: {
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
