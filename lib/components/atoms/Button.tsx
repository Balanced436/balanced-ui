import styled from 'styled-components';
import { type ButtonHTMLAttributes, JSX, type ReactNode } from 'react';
type Variant = 'primary' | 'secondary';
type Size = 'small' | 'medium' | 'large';

interface MyButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
}

const StyledButton = styled.button<MyButtonProps>`
  padding: ${({ size = 'medium' }) => {
    if (size === 'small') return '6px 12px';
    if (size === 'large') return '14px 28px';
    return '10px 20px';
  }};

  font-size: ${({ size = 'medium' }) => {
    if (size === 'small') return '12px';
    if (size === 'large') return '20px';
    return '16px';
  }};

  border: none;
  cursor: pointer;
  background-color: ${({ variant = 'primary' }) => (variant === 'primary' ? '#000000' : '#6c757d')};
  color: white;

  &:hover {
    opacity: 0.8;
  }
`;

/**
 * Custom button
 *
 * @param {MyButtonProps} props - Button's properties
 *   - `children`: content
 *   - `variant`: visual style ("primary" or "secondary")
 *   - `size`: "small", "medium", "large")
 * @returns {ReactNode} A button
 */
export const Button = ({ children, variant = 'primary', size = 'small', ...props }: MyButtonProps): JSX.Element => {
  return (
    <StyledButton variant={variant} size={size} {...props}>
      {children}
    </StyledButton>
  );
};
