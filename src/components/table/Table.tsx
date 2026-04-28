import type { ReactNode, HTMLAttributes } from "react";


interface TableProps extends HTMLAttributes<HTMLTableElement> {
    children: ReactNode;
}

export const Table = ({ children, ...props }: TableProps) => {
    return <table {...props}>{children}</table>
};