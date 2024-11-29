import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { TextField } from './index';
import { Typography } from '../Typography';

const meta = {
  title: 'Components/TextField',
  component: TextField,
  parameters: {
    layout: 'centered',
    docs: { description: { component: '使用方式皆為 Control Component。' } },
  },
  tags: ['autodocs'],
  argTypes: {
    id: { control: 'text' },
    name: { control: 'text' },
    data: { control: 'object' },
    customStyle: { control: 'object' },
  },
} as Meta<typeof TextField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: () => {
    const [value, setValue] = useState('');

    const onChange = (e) => {
      setValue(e.target.value);
    };

    return (
      <div>
        <TextField {... {
          id: 'id-1',
          name: 'name-1',
          placeholder: 'Placeholder',
          onChange,
          value,
          data: {
            label: 'Label',
            isShowClearButton: true,
          },
          customStyle: {
            label: { color: 'gray800' },
          },
        }}
        />

        <Typography
          margin="20px 0 0"
          fontSize={{ default: 'body3' }}
          style={{ width: '160px' }}
        >
          {`input value: ${value}`}
        </Typography>
      </div>
    );
  },
};

export const ColorStyle: Story = {
  render: () => {
    const [value, setValue] = useState('');

    const onChange = (e) => {
      setValue(e.target.value);
    };

    return (
      <TextField {...{
        id: 'TextField-ColorStyle',
        name: 'TextField-ColorStyle',
        placeholder: 'Placeholder',
        onChange,
        value,
        data: {
          label: 'testtest',
          isShowClearButton: false,
        },
        customStyle: {
          label: { fontSize: { default: 'h5' }, color: '#ff9900' },
          input: {
            borderColor: '#ff9900',
          },
        },
      }}
      />
    );
  },
};
export const DefaultOfFillWidth: Story = {
  parameters: { layout: 'padded' },
  render: () => {
    const [value, setValue] = useState('');

    const onChange = (e) => {
      setValue(e.target.value);
    };

    return (
      <TextField {...{
        onChange,
        value,
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
      }}
      />
    );
  },
};

export const NoLabel: Story = {
  render: () => {
    const [value, setValue] = useState('');

    const onChange = (e) => {
      setValue(e.target.value);
    };

    return (
      <TextField {...{
        onChange,
        value,
        id: 'id-NoLabel',
        name: 'name-NoLabel',
        defaultValue: 'Default Value',
        placeholder: 'Placeholder',
        customStyle: {
          label: { color: 'gray800' },
        },
      }}
      />
    );
  },
};

export const Disabled: Story = {
  render: () => {
    const [value, setValue] = useState('');

    const onChange = (e) => {
      setValue(e.target.value);
    };

    return (
      <TextField {...{
        onChange,
        value,
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
      }}
      />
    );
  },
};

export const DisabledWithDefaultValue: Story = {
  render: () => {
    const [value, setValue] = useState('');

    const onChange = (e) => {
      setValue(e.target.value);
    };

    return (
      <TextField {...{
        onChange,
        value,
        id: 'TextField-DisabledWithDefaultValue',
        name: 'TextField-DisabledWithDefaultValue',
        disabled: true,
        defaultValue: 'Default Value',
        placeholder: 'Placeholder',
        data: {
          label: 'Label',
          isShowClearButton: true,
        },
      }}
      />
    );
  },
};

export const WithSupportText: Story = {
  parameters: { docs: { description: { story: '請依使用情境，各自獨立客製化所需的`提示訊息`。' } } },
  render: () => {
    const [value, setValue] = useState('');

    const onChange = (e) => {
      setValue(e.target.value);
    };

    return (
      <div>
        <TextField {...{
          id: 'TextField-group-1',
          name: 'TextField-group',
          onChange,
          value,
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

        <Typography
          margin="20px 0 0"
          fontSize={{ default: 'body3' }}
          style={{ width: '160px' }}
        >
          {`input value: ${value}`}
        </Typography>
      </div>
    );
  },
};
