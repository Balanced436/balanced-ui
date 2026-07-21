import * as React from 'react';
type Direction = 'row' | 'column' | 'row-reverse' | 'column-reverse';
type JustifyContent = 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around';

interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  direction: Direction;
  gap: number;
  justifyContent: JustifyContent;
}

export const Stack = ({ children, direction = 'row', gap = 0, justifyContent = 'flex-start' }: StackProps): React.JSX.Element => {
  return <div>{children}</div>;
};
