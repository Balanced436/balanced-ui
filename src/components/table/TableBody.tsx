import type { HTMLAttributes, ReactNode } from 'react';

interface TableBodyProps extends HTMLAttributes<HTMLTableSectionElement> {
  children: ReactNode;
}
export const TableBody = ({ children, ...props }: TableBodyProps) => {
  return <tbody {...props}>{children}</tbody>;
};
