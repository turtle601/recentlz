import { css } from '@emotion/react';
import { color } from '@/styles/theme';

import Flex from './Flex';

import type { StoryObj } from '@storybook/react';

const meta = {
  title: 'Flex',
  component: Flex,
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
      <Flex gap="12px">
        <div css={boxStyle}></div>
        <div css={boxStyle}></div>
        <div css={boxStyle}></div>
        <div css={boxStyle}></div>
        <div css={boxStyle}></div>
        <div css={boxStyle}></div>
      </Flex>
    );
  },
};
