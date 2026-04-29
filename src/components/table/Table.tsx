import type { ReactNode, HTMLAttributes } from 'react';
import styles from './Table.module.css';

interface TableProps extends HTMLAttributes<HTMLTableElement> {
  children: ReactNode;
}

export const Table = ({ children, ...props }: TableProps) => {
  return (
    <table className={styles.Table} {...props}>
      {children}
    </table>
  );
};
