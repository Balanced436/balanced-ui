import React from 'react';
import Styles from './Typography.module.css';

export type TypographyVariant =
  | 'display'
  | 'title-large'
  | 'title-medium'
  | 'title-small'
  | 'subtitle'
  | 'body-large'
  | 'body-medium'
  | 'body-small'
  | 'caption';

const variantMapping: Record<TypographyVariant, React.ElementType> = {
  display: 'h1',
  'title-large': 'h1',
  'title-medium': 'h2',
  'title-small': 'h3',
  subtitle: 'p',
  'body-large': 'p',
  'body-medium': 'p',
  'body-small': 'span',
  caption: 'span',
};

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  variant?: TypographyVariant;
  as?: React.ElementType;
  children: React.ReactNode;
}

export function Typography({ variant = 'body-medium', as, children, className, ...rest }: TypographyProps) {
  const Component = as || variantMapping[variant] || 'p';

  const combinedClasses = [Styles[variant], className].filter(Boolean).join(' ');

  return (
    <Component className={combinedClasses} {...rest}>
      {children}
    </Component>
  );
}
