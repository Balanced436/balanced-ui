import styles from './Card.module.css';
import { Typography } from '../../main.ts';
import type { HTMLAttributes } from 'react';

interface CardSectionProps extends HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

export const Card = ({ children, ...rest }: CardSectionProps) => {
  return (
    <div className={`${styles.card}`} {...rest}>
      {children}
    </div>
  );
};

const CardTitle = ({ children, ...rest }: CardSectionProps) => {
  return (
    <Typography variant={'title-medium'} className={`${styles.title}`} {...rest}>
      {children}
    </Typography>
  );
};

const CardSubTitle = ({ children, ...rest }: CardSectionProps) => {
  return (
    <Typography variant={'subtitle'} className={`${styles.subtitle}`} {...rest}>
      {children}
    </Typography>
  );
};

const CardBody = ({ children, ...rest }: CardSectionProps) => {
  return (
    <Typography variant={'body-medium'} className={`${styles.body}`} {...rest}>
      {children}
    </Typography>
  );
};

const CardFooter = ({ children, ...rest }: CardSectionProps) => {
  return (
    <Typography variant={'body-small'} className={`${styles.footer}`} {...rest}>
      {children}
    </Typography>
  );
};

Card.Title = CardTitle;
Card.SubTitle = CardSubTitle;
Card.Body = CardBody;
Card.Footer = CardFooter;
