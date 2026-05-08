import * as React from 'react';
import { NavigationMenu } from '@base-ui/react/navigation-menu';
import styles from './Navigation.module.css';
import { Button } from '../../main.ts';

interface NavigationProps extends React.HTMLProps<HTMLDivElement> {
  children?: React.ReactNode;
  justify?: 'flex-start' | 'center' | 'flex-end';
  position?: 'relative' | 'fixed';
}

export function Navigation({ children, justify = 'flex-start', position = 'fixed', className, style }: NavigationProps) {
  return (
    <NavigationMenu.Root data-position={position} className={`${styles.Root} ${className}`.trim()} style={style}>
      <NavigationMenu.List className={styles.List} data-justify={justify}>
        {children}
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
}

export function NavigationItem({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <NavigationMenu.Item>
      <Button variant={'invisible'} href={href}>
        {children}
      </Button>
    </NavigationMenu.Item>
  );
}
