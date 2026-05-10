import styles from './SideBar.module.css';
import { Button } from '../../main.ts';
import * as React from 'react';
import { NavigationMenu } from '@base-ui/react/navigation-menu';

interface SideBarProps extends React.HTMLProps<HTMLDivElement> {
  children?: React.ReactNode;
  justify?: 'flex-start' | 'center' | 'flex-end';
}

export function SideBar({ children, justify = 'flex-start', className, style }: SideBarProps) {
  return (
    <NavigationMenu.Root className={`${styles.Root} ${className}`.trim()} style={style}>
      <NavigationMenu.List className={styles.List} data-justify={justify}>
        {children}
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
}

export function SideBarItem({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <NavigationMenu.Item>
      <Button variant={'invisible'} href={href}>
        {children}
      </Button>
    </NavigationMenu.Item>
  );
}