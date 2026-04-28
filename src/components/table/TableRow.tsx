import type { HTMLAttributes, ReactNode } from "react";

interface TableRowProps extends HTMLAttributes<HTMLTableRowElement> {
    children: ReactNode;
}
export const TableRow = ({ children, ...props }: TableRowProps) => {
    return <tr {...props}>{children}</tr>
};

