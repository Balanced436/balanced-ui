import styles from './Table.module.css';
import type { CSSProperties } from 'react';

type TableDensity = 'normal' | 'condensed' | 'spacious';

interface TableProps extends React.TableHTMLAttributes<HTMLTableElement> {
  children: React.ReactNode;
  density?: TableDensity;
  style?: CSSProperties;
}

export const Table = ({ children, density = 'normal', style, ...props }: TableProps) => {
  return (
    <table style={style} data-density={density} className={styles.Table} {...props}>
      {children}
    </table>
  );
};
