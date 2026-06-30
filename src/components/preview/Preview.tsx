import React from 'react';
import { Button, Tabs } from '../../main.ts';
import { Code } from '../code/Code.tsx';
import styles from './Preview.module.css';
import { IoCopyOutline } from 'react-icons/io5';

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
  // TODO: Button should support className prop

  const handleCopy = async () => {
    // https://developer.mozilla.org/en-US/docs/Web/API/Clipboard/writeText
    try {
      await navigator.clipboard.writeText(children);
      alert('Copied');
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <Tabs.Panel value="code" className={styles.Code}>
      <Button
        icon={<IoCopyOutline />}
        style={{ position: 'absolute', top: 'var(--base-size-4)', right: 'var(--base-size-4)' }}
        variant={'invisible'}
        size={'small'}
        onClick={handleCopy}
      ></Button>
      <Code language={language}>{children}</Code>
    </Tabs.Panel>
  );
};

Preview.Panel = PreviewPanel;
Preview.Code = PreviewCode;
