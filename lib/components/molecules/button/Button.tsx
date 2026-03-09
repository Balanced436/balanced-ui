import { Button as BaseButton } from '@base-ui/react/button';
import type { ButtonHTMLAttributes, ReactNode, JSX } from 'react';

import styles from './index.module.css';
import './theme.css';

type Variant = 'primary' | 'secondary';
type Size = 'small' | 'medium' | 'large';

interface MyButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
}

export const Button = ({ children, variant = 'primary', size = 'small', ...props }: MyButtonProps): JSX.Element => {
  return (
    <BaseButton {...props} className={[styles.Button, styles[`variant_${variant}`], styles[`size_${size}`]].join(' ')}>
      {children}
    </BaseButton>
  );
};
