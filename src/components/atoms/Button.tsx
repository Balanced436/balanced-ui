import styled from "styled-components";
import { ReactNode } from "react";
import theme from '../../theme';

interface ButtonProps {
    children?: ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    bgColor?: string;
}

/** Styled button with dynamic background */
const StyledButton = styled.button<ButtonProps>`
    background-color: ${theme.colors.primary.light};
    color: white;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;

    &:not(:disabled):hover {
        filter: brightness(120%);
    }
    
    disabled {
        opacity: 0.5;
    }

`;

/** A minimalist button component */
const Button = ({ children, onClick, bgColor, ...props }: ButtonProps) => {
    return <StyledButton disabled={true} {...props}>
        {children}
    </StyledButton>;
};

export default Button;
