import VideoInfo from './VideoInfo';

import type { StoryObj } from '@storybook/react';

const meta = {
  title: 'VideoInfo',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    return <VideoInfo videoId="gFJ-obHmtE4" />;
  },
};
