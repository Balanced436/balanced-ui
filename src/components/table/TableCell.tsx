import type { HTMLAttributes, ReactNode } from "react";

interface TableCellProps extends HTMLAttributes<HTMLTableCellElement> {
    children: ReactNode;
}
export const TableCell = ({ children, ...props }: TableCellProps) => {
    return <td {...props}>{children}</td>
};
