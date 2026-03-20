import * as React from 'react';
import { NavigationMenu } from '@base-ui/react/navigation-menu';
import styles from './Navigation.module.css';
import { Button } from '../../main.ts';

interface NavigationProps {
  children: React.ReactNode;
  justify?: 'flex-start' | 'center' | 'flex-end';
}

export function Navigation({ children, justify = 'flex-start' }: NavigationProps) {
  return (
    <NavigationMenu.Root className={styles.Root}>
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
