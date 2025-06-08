import styled from "styled-components";
import { type ButtonHTMLAttributes, type ReactNode } from 'react';

interface MyButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: "primary" | "secondary";
    size?: "small" | "medium" | "large";
}

const StyledButton = styled.button<MyButtonProps>`
    padding: ${({size = "medium"}) => {
        if (size === "small") return "6px 12px";
        if (size === "large") return "14px 28px";
        return "10px 20px";
    }};

    font-size: ${({size = "medium"}) => {
        if (size === "small") return "12px";
        if (size === "large") return "20px";
        return "16px";
    }};

    border: none;
    cursor: pointer;
    background-color: ${({variant = "primary"}) =>
            variant === "primary" ? "#007bff" : "#6c757d"};
    color: white;

    &:hover {
        opacity: 0.8;
    }
`;

export const Button: React.FC<MyButtonProps> = ({children, variant = "primary", size = "medium", ...props }) => {
    return <StyledButton variant={variant} size={size} {...props}>{children}</StyledButton>;
};

