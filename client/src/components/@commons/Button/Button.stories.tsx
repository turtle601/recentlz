import type { StoryObj } from '@storybook/react';

import Button from './Button';

const meta = {
  title: 'Button',
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: () => {
    return (
      <Button
        kind="primary"
        styles={{
          width: '100px',
          height: '30px',
        }}
        onClick={() => {}}
      >
        안녕하세요!
      </Button>
    );
  },
};

export const Secondary: Story = {
  render: () => {
    return (
      <Button
        as="a"
        kind="secondary"
        styles={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100px',
          height: '30px',
        }}
        onClick={() => {}}
      >
        안녕하세요!
      </Button>
    );
  },
};

export const Danger: Story = {
  render: () => {
    return (
      <Button
        kind="danger"
        styles={{
          width: '100px',
          height: '30px',
        }}
        onClick={() => {}}
      >
        안녕하세요!
      </Button>
    );
  },
};
