import React from 'react';
import { Tabs } from '../../main.ts';
import { Code } from '../code/Code.tsx';
import styles from './Preview.module.css';

interface PreviewProps {
  children: React.ReactNode;
}

export const Preview = ({ children }: PreviewProps) => {
  return (
    <Tabs>
      <Tabs.List>
        <Tabs.Tab value="preview">Preview</Tabs.Tab>
        <Tabs.Tab value="code">Code</Tabs.Tab>
        <Tabs.Indicator />
      </Tabs.List>
      <div>{children}</div>
    </Tabs>
  );
};

interface PreviewPanelProps {
  children: React.ReactNode;
}

const PreviewPanel = ({ children }: PreviewPanelProps) => {
  return (
    <Tabs.Panel value="preview" className={styles.Preview}>
      {children}
    </Tabs.Panel>
  );
};

interface PreviewCodeProps {
  children: string;
  language?: 'tsx';
}

const PreviewCode = ({ children, language = 'tsx' }: PreviewCodeProps) => {
  return (
    <Tabs.Panel value="code" className={styles.Code}>
      <Code language={language}>{children}</Code>
    </Tabs.Panel>
  );
};

Preview.Panel = PreviewPanel;
Preview.Code = PreviewCode;
