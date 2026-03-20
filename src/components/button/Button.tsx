import { Button as BaseButton } from '@base-ui/react/button';
import type { ButtonHTMLAttributes, ReactNode, JSX } from 'react';

import styles from './Button.module.css';

type Variant = 'primary' | 'default' | 'danger' | 'invisible';
type Size = 'small' | 'medium' | 'large';

interface MyButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
}

export const Button = ({ children, variant = 'default', size = 'medium', disabled = false, ...props }: MyButtonProps): JSX.Element => {
  return (
    <BaseButton {...props} data-disabled={disabled} className={[styles.Button, styles[`${variant}`], styles[`${size}`]].join(' ')}>
      {children}
    </BaseButton>
  );
};
