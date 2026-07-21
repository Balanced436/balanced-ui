import * as React from 'react';
import { NavigationMenu } from '@base-ui/react/navigation-menu';
import styles from './Navigation.module.css';
import { Button } from '../../main.ts';

/*
 * TODO justify is not implemented*/
interface NavigationProps extends React.ComponentPropsWithRef<typeof NavigationMenu.Root> {
  children?: React.ReactNode;
  position?: 'relative' | 'fixed';
  justify?: 'flex-start' | 'center' | 'flex-end';
}

export function Navigation({ children, position, className = '', style }: NavigationProps) {
  return (
    <NavigationMenu.Root data-position={position} className={`${styles.Root} ${className}`.trim()} style={style}>
      {children}
    </NavigationMenu.Root>
  );
}

interface NavigationListProps extends React.ComponentPropsWithoutRef<typeof NavigationMenu.List> {
  children?: React.ReactNode;
  justify?: 'flex-start' | 'center' | 'flex-end';
}

export function NavigationList({ children, justify = 'flex-start', className = '' }: NavigationListProps) {
  return (
    <NavigationMenu.List className={`${styles.List} ${className}`.trim()} data-justify={justify}>
      {children}
    </NavigationMenu.List>
  );
}

interface NavigationItemProps extends React.ComponentPropsWithoutRef<typeof NavigationMenu.Item> {
  children: React.ReactNode;
  icon?: React.ReactNode;
  href?: string;
}

export function NavigationItem({ href, children, icon }: NavigationItemProps) {
  return (
    <NavigationMenu.Item>
      <Button icon={icon} variant="invisible" href={href}>
        {children}
      </Button>
    </NavigationMenu.Item>
  );
}
