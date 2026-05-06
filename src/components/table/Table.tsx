import styles from './Table.module.css';

type TableDensity = 'normal' | 'condensed' | 'spacious';

interface TableProps extends React.TableHTMLAttributes<HTMLTableElement> {
  children: React.ReactNode;
  density?: TableDensity;
}

export const Table = ({ children, density = 'normal', ...props }: TableProps) => {
  return (
    <table data-density={density} className={styles.Table} {...props}>
      {children}
    </table>
  );
};
