import type { HTMLAttributes, ReactNode } from "react";

interface TableHeadProps extends HTMLAttributes<HTMLTableSectionElement> {
    children: ReactNode;
}
export const TableHead = ({ children, ...props }: TableHeadProps) => {
    return <thead {...props}>{children}</thead>
};
