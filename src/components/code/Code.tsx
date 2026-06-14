import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import tsx from 'react-syntax-highlighter/dist/esm/languages/prism/tsx';
import { vs } from 'react-syntax-highlighter/dist/esm/styles/prism';

SyntaxHighlighter.registerLanguage('tsx', tsx);

interface CodeProps {
  children: string;
  language: 'tsx';
}

export const Code = ({ children, language }: CodeProps) => {
  return (
    <SyntaxHighlighter language={language} style={vs} showLineNumbers customStyle={{ width: '100%', boxSizing: 'border-box', margin: 0 }}>
      {children}
    </SyntaxHighlighter>
  );
};
