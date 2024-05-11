import Text from './Text';

import type { StoryObj } from '@storybook/react';

const meta = {
  title: 'Text',
  componenets: Text,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    return <Text color="blue500" label="안녕하세요" type="large1" />;
  },
};
