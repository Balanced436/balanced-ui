import { Tabs as BaseTabs } from '@base-ui/react/tabs';
import styles from './Tabs.module.css';
import { Button } from '../../main.ts';
import React from 'react';

interface TabsProps extends React.ComponentProps<typeof BaseTabs.Root> {
  children: React.ReactNode;
}

interface ListProps extends React.ComponentProps<typeof BaseTabs.List> {
  children: React.ReactNode;
}

interface TabProps extends React.ComponentProps<typeof BaseTabs.Tab> {
  children: React.ReactNode;
  value: string;
}

interface IndicatorProps extends React.ComponentProps<typeof BaseTabs.Indicator> {}

interface PanelProps extends React.ComponentProps<typeof BaseTabs.Panel> {
  value: string;
  children: React.ReactNode;
}

export const Tabs = ({ children, style, className, ...rest }: TabsProps) => {
  return (
    <BaseTabs.Root className={`${styles.Root} ${className || ''}`.trim()} style={style} {...rest}>
      {children}
    </BaseTabs.Root>
  );
};

const List = ({ children, className, style, ...rest }: ListProps) => {
  return (
    <BaseTabs.List className={`${styles.List} ${className || ''}`.trim()} style={style} {...rest}>
      {children}
    </BaseTabs.List>
  );
};

const Tab = ({ children, value, className, style, ...rest }: TabProps) => {
  return (
    <BaseTabs.Tab
      className={`${styles.Tab} ${className || ''}`.trim()}
      value={value}
      style={style}
      render={(htmlProps, state) => {
        {
          /*TODO: find a better method for additional styles*/
        }
        return (
          <Button
            style={{ borderBottom: `${state.active ? '1px solid black' : 'unset'}`, borderRadius: 'unset', boxSizing: 'border-box' }}
            {...htmlProps}
            variant={'invisible'}
            size="small"
          />
        );
      }}
      {...rest}
    >
      {children}
    </BaseTabs.Tab>
  );
};

const Indicator = ({ className, style, ...rest }: IndicatorProps) => {
  return <BaseTabs.Indicator className={`${styles.Indicator} ${className || ''}`.trim()} style={style} {...rest} />;
};

const Panel = ({ children, value, style, className, ...rest }: PanelProps) => {
  return (
    <BaseTabs.Panel className={`${styles.Panel} ${className || ''}`.trim()} value={value} style={style} {...rest}>
      {children}
    </BaseTabs.Panel>
  );
};

Tabs.Tab = Tab;
Tabs.List = List;
Tabs.Indicator = Indicator;
Tabs.Panel = Panel;
