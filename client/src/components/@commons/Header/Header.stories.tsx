import Header from './Header';

import type { StoryObj } from '@storybook/react';

const meta = {
  title: 'Header',
  component: Header,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    return <Header />;
  },
};
