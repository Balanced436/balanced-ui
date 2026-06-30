import { Button as BaseButton } from '@base-ui/react/button';
import type { ButtonHTMLAttributes, CSSProperties, JSX, ReactNode } from 'react';

import styles from './Button.module.css';
import { Spinner } from '../../main.ts';

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
  loading?: boolean;
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
  loading = false,
  ...props
}: MyButtonProps): JSX.Element => {
  if (icon && !children && !props['aria-label']) {
    console.warn('Use aria-label prop when using icon only');
  }

  // TODO: remove dual icon usage
  // TODO: add className support
  const classes = [styles.Button, styles[variant], styles[size], icon ? styles.iconOnly : ''].filter(Boolean).join(' ');
  return (
    <BaseButton
      disabled={disabled || loading}
      {...props}
      render={href ? <a href={href} /> : undefined}
      data-disabled={disabled || loading}
      className={classes}
      style={style}
    >
      {icon ? (
        <>
          {/* case 1: replace the text with the spinner*/}
          {loading ? (
            <span style={{ height: '1em', width: '1em' }}>
              <Spinner />
            </span>
          ) : (
            <span style={{ height: '1em', width: '1em' }}>{icon}</span>
          )}
          {children}
        </>
      ) : (
        <>
          {/* case 2: replace left icon with a spinner*/}

          {loading && leftIcon && (
            <span style={{ height: '1em', width: '1em' }}>
              <Spinner />
            </span>
          )}
          {!loading && leftIcon && leftIcon}

          {children}

          {/* case 3: replace right icon with a spinner*/}
          {loading && rightIcon && (
            <span style={{ height: '1em', width: '1em' }}>
              <Spinner />
            </span>
          )}
          {!loading && rightIcon && rightIcon}

          {/* case 4: display a spinner at the right of the text TODO: replace the text*/}
          {loading && !leftIcon && !rightIcon && !icon && (
            <span style={{ height: '1em', width: '1em' }}>
              <Spinner />
            </span>
          )}
        </>
      )}
    </BaseButton>
  );
};
