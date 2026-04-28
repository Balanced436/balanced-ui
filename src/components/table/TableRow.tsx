import type { HTMLAttributes, ReactNode } from "react";
import styles from './TableRow.module.css'

interface TableRowProps extends HTMLAttributes<HTMLTableRowElement> {
    children: ReactNode;
}
export const TableRow = ({ children, ...props }: TableRowProps) => {
    return <tr className={styles.TableRow} {...props}>{children}</tr>
};

