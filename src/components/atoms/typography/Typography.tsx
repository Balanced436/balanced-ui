import React from 'react';

import Styles from './Typography.module.css';

type TypographyVariant =
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

interface TypographyProps {
  variant: TypographyVariant;
  children: React.ReactNode;
}

export function Typography({ variant = 'body-medium', children }: TypographyProps) {
  const Component = variantMapping[variant];

  return <Component className={Styles[variant]}>{children}</Component>;
}
