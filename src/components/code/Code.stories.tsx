import type { Meta, StoryObj } from '@storybook/react';
import { Code } from './Code.tsx';

const meta: Meta = {
  title: 'component/Code',
  component: Code,
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: (args) => (
    <Code language="tsx">
      {`import { Button } from 'balanced-ui';

const Demo = () => {
  return <Button />;
};
`}
    </Code>
  ),
};
