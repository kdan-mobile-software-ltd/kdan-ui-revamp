import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { RadioButton } from './index';

const meta = {
  title: 'Components/RadioButton',
  component: RadioButton,
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
} as Meta<typeof RadioButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    id: 'id-1',
    name: 'name-1',
    data: {
      label: 'Placeholder',
    },
  },
};

export const ColorStyle: Story = {
  args: {
    id: 'radio-ColorStyle',
    name: 'radio-ColorStyle',
    data: {
      label: 'testtest',
    },
    customStyle: {
      label: { fontSize: { default: 'h5' }, color: '#ff9900' },
      radio: { activeColor: '#ff9900' },
    },
  },
};

export const Disabled: Story = {
  args: {
    id: 'radio-Disabled',
    name: 'radio-Disabled',
    disabled: true,
    data: {
      label: 'testtest',
    },
  },
};
export const DisabledWithChecked: Story = {
  args: {
    id: 'radio-DisabledWithChecked',
    name: 'radio-DisabledWithChecked',
    disabled: true,
    checked: true,
    data: {
      label: 'testtest',
    },
  },
};
export const RadioGroup: Story = {
  parameters: { docs: { description: { story: '注意 Group 內每個 Radio 的 `name` 要一致' } } },
  render: () => (
    <fieldset>
      <RadioButton {...{
        id: 'radio-group-1',
        name: 'radio-group',
        data: {
          label: 'radio 1',
        },
      }}
      />
      <RadioButton {...{
        id: 'radio-group-2',
        name: 'radio-group',
        data: {
          label: 'radio 2',
        },
      }}
      />
      <RadioButton {...{
        id: 'radio-group-3',
        name: 'radio-group',
        data: {
          label: 'radio 3',
        },
      }}
      />
    </fieldset>
  ),
};
