import { SpacerProps } from '@/components/@commons/Layout/Spacer/Spacer.type';

export const getSpacerStyle = ({ direction, space }: SpacerProps) => {
  if (direction === 'vertical') {
    return {
      width: '100%',
      height: `${space}`,
    };
  }

  return {
    width: `${space}`,
    height: 'auto',
  };
};
