import type { HTMLAttributes, ReactNode } from "react";
import styles from './TableCell.module.css'

interface TableCellProps extends HTMLAttributes<HTMLTableCellElement> {
    children: ReactNode;
}
export const TableCell = ({ children, ...props }: TableCellProps) => {
    return <td className={styles.TableCell} {...props}>{children}</td>
};
