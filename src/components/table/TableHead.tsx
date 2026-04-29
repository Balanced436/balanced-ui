import type { HTMLAttributes, ReactNode } from 'react';

import styles from './TableHead.module.css';

interface TableHeadProps extends HTMLAttributes<HTMLTableSectionElement> {
  children: ReactNode;
}
export const TableHead = ({ children, ...props }: TableHeadProps) => {
  return (
    <thead className={styles.TableHead} {...props}>
      {children}
    </thead>
  );
};
