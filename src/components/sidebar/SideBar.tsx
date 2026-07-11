import styles from './SideBar.module.css';
import { Button, Typography } from '../../main.ts';
import type { CSSProperties } from 'react';
import * as React from 'react';
import { NavigationMenu } from '@base-ui/react/navigation-menu';

interface SideBarProps extends React.HTMLProps<HTMLDivElement> {
  children?: React.ReactNode;
  justify?: 'flex-start' | 'center' | 'flex-end';
  style?: CSSProperties;
}
export const SideBar = ({ children, className, style, justify = 'flex-start' }: SideBarProps) => {
  return (
    <NavigationMenu.Root className={`${styles.Root} ${className}`.trim()} style={style}>
      <NavigationMenu.List className={styles.List} data-justify={justify}>
        {children}
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
};

const SideBarSection = ({ children, title }: { children: React.ReactNode; title: string }) => {
  return (
    <NavigationMenu.Item className={styles.SectionContainer}>
      <Typography as={'span'} className={styles.SectionTitle}>
        {title}
      </Typography>
      <ul className={styles.SectionSubList}>{children}</ul>
    </NavigationMenu.Item>
  );
};

/*TODO add support for icon */
const SideBarItem = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <NavigationMenu.Item className={styles.Item}>
      <Button variant={'invisible'} size={'small'} href={href}>
        {children}
      </Button>
    </NavigationMenu.Item>
  );
};

SideBar.Section = SideBarSection;
SideBar.Item = SideBarItem;
