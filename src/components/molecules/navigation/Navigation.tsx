import * as React from 'react';
import { NavigationMenu } from '@base-ui/react/navigation-menu';
import styles from './Navigation.module.css';

interface NavigationProps {
  children: React.ReactNode;
}

export function Navigation({ children }: NavigationProps) {
  return (
    <NavigationMenu.Root className={styles.Root}>
      <NavigationMenu.List className={styles.List}>
        {children}
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
}

export function NavigationItem({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <NavigationMenu.Item>
      <NavigationMenu.Link className={styles.Trigger} href={href} render={<a />}>
        {children}
      </NavigationMenu.Link>
    </NavigationMenu.Item>
  );
}
