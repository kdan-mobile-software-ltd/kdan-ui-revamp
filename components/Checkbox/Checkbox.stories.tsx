import { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './index';

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    id: { control: 'text' },
    name: { control: 'text' },
    data: { control: 'object' },
    customStyle: { control: 'object' },
  },
} as Meta<typeof Checkbox>;

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
    id: 'checkbox-ColorStyle',
    name: 'checkbox-ColorStyle',
    data: {
      label: 'testtest',
    },
    customStyle: {
      label: { fontSize: { default: 'h5' }, color: '#ff9900' },
      check: { activeColor: '#ff9900' },
    },
  },
};

export const Disabled: Story = {
  args: {
    id: 'checkbox-Disabled',
    name: 'checkbox-Disabled',
    disabled: true,
    data: {
      label: 'testtest',
    },
  },
};
export const DisabledWithChecked: Story = {
  args: {
    id: 'checkbox-DisabledWithChecked',
    name: 'checkbox-DisabledWithChecked',
    disabled: true,
    checked: true,
    data: {
      label: 'testtest',
    },
  },
};
