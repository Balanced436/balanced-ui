import { Button as BaseButton } from '@base-ui/react/button';
import type { ButtonHTMLAttributes, CSSProperties, JSX, ReactNode } from 'react';

import styles from './Button.module.css';

type Variant = 'primary' | 'default' | 'danger' | 'invisible';
type Size = 'small' | 'medium' | 'large';

interface MyButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  variant?: Variant;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  icon?: ReactNode;
  size?: Size;
  href?: string;
  style?: CSSProperties;
}

export const Button = ({
  children,
  variant = 'default',
  size = 'medium',
  disabled = false,
  href,
  style,
  leftIcon,
  rightIcon,
  icon,
  ...props
}: MyButtonProps): JSX.Element => {
  if (icon && !children && !props['aria-label']) {
    console.warn('Use aria-label prop when using icon only');
  }

  const classes = [styles.Button, styles[variant], styles[size], icon ? styles.iconOnly : ''].filter(Boolean).join(' ');

  return (
    <BaseButton
      disabled={disabled}
      {...props}
      render={href ? <a href={href} /> : undefined}
      data-disabled={disabled}
      className={classes}
      style={style}
    >
      {icon ? (
        <>
          {icon}
          {children}
        </>
      ) : (
        <>
          {leftIcon && leftIcon}
          {children}
          {rightIcon && rightIcon}
        </>
      )}
    </BaseButton>
  );
};
