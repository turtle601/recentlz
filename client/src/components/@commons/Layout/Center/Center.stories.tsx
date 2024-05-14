import { css } from '@emotion/react';
import { color } from '@/styles/theme';

import Center from './Center';

import type { StoryObj } from '@storybook/react';

const meta = {
  title: 'Center',
  component: Center,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const boxStyle = css({
  width: '40px',
  height: '40px',
  backgroundColor: color.blue500,
});

export const Default: Story = {
  render: () => {
    return (
      <Center
        styles={{ width: '200px', height: '200px', border: '1px solid red' }}
      >
        <div css={boxStyle}></div>
      </Center>
    );
  },
};
