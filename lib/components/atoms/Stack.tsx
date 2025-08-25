import * as React from 'react';
import styled from 'styled-components';

type Direction = 'horizontal' | 'vertical';

type JustifyContent = 'left' | 'right';

interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  direction: Direction;
  gap: number;
  justifyContent: JustifyContent;
}

const StyledDiv = styled.div<StackProps>`
  display: flex;
  justify-content: ${({ justifyContent }) => (justifyContent === 'left' ? 'flex-start' : 'flex-end')};
  flex-direction: ${({ direction }) => (direction === 'horizontal' ? 'row' : 'column')};
  gap: ${({ gap }) => `${gap}px`};
`;
export const Stack = ({ children, direction = 'vertical', gap = 0, justifyContent = 'left', ...rest }: StackProps): React.JSX.Element => {
  return (
    <StyledDiv direction={direction} gap={gap} justifyContent={justifyContent} {...rest}>
      {children}
    </StyledDiv>
  );
};
