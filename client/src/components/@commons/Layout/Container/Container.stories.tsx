import { css } from '@emotion/react';
import { color } from '@/styles/theme';

import Container from './Container';

import type { StoryObj } from '@storybook/react';

const meta = {
  title: 'Container',
  component: Container,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const boxStyle = css({
  width: '600px',
  height: '40px',
  backgroundColor: color.blue500,
  '& + &': {
    marginTop: '10px',
  },
});

export const Default: Story = {
  render: () => {
    return (
      <Container minWidth="500px">
        <div css={boxStyle}></div>
        <div css={boxStyle}></div>
        <div css={boxStyle}></div>
        <div css={boxStyle}></div>
        <div css={boxStyle}></div>
        <div css={boxStyle}></div>
      </Container>
    );
  },
};
