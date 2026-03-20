import * as React from 'react';
import styled from 'styled-components';

type Direction = 'row' | 'column' | 'row-reverse' | 'column-reverse';
type JustifyContent = 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around';

interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  direction: Direction;
  gap: number;
  justifyContent: JustifyContent;
}

const StyledDiv = styled.div<StackProps>`
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent};
  flex-direction: ${({ direction }) => direction};
  gap: ${({ gap }) => `${gap}px`};
`;
export const Stack = ({ children, direction = 'row', gap = 0, justifyContent = 'flex-start' }: StackProps): React.JSX.Element => {
  return (
    <StyledDiv direction={direction} gap={gap} justifyContent={justifyContent}>
      {children}
    </StyledDiv>
  );
};
