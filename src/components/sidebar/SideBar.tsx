import styles from './SideBar.module.css';
import { Button, Typography } from '../../main.ts';
import type { CSSProperties } from 'react';
import * as React from 'react';
import { NavigationMenu } from '@base-ui/react/navigation-menu';

interface SideBarProps extends React.ComponentPropsWithoutRef<typeof NavigationMenu.Root> {
  children?: React.ReactNode;
  justify?: 'flex-start' | 'center' | 'flex-end';
  style?: CSSProperties;
}
export const SideBar = ({ children, className, style, justify = 'flex-start' }: SideBarProps) => {
  return (
    <NavigationMenu.Root className={`${styles.Root} ${className}`.trim()} style={style}>
      {children}
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

interface SideBarListProps extends React.ComponentPropsWithoutRef<typeof NavigationMenu.List> {
  children?: React.ReactNode;
  justify?: 'flex-start' | 'center' | 'flex-end';
}
const SideBarList = ({ children, title, justify = 'flex-start' }: SideBarListProps) => {
  return (
    <NavigationMenu.List className={styles.List} data-justify={justify}>
      {title && (
        <Typography as={'span'} className={styles.SectionTitle}>
          {title}
        </Typography>
      )}
      {children}
    </NavigationMenu.List>
  );
};

interface SideBarItemProps extends React.ComponentPropsWithoutRef<typeof NavigationMenu.Item> {
  children: React.ReactNode;
  href?: string;
  isSelected?: boolean;
}

/*TODO add support for icon */
const SideBarItem = ({ href, children, isSelected = false }: SideBarItemProps) => {
  const current = isSelected ? 'page' : undefined;
  return (
    <NavigationMenu.Item className={styles.Item}>
      <Button variant={'invisible'} size={'small'} href={href} data-sidebar-current={current} aria-current={current}>
        {children}
      </Button>
    </NavigationMenu.Item>
  );
};

SideBar.Section = SideBarSection;
SideBar.Item = SideBarItem;
SideBar.List = SideBarList;
