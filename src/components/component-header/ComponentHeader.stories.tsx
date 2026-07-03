import type { Meta, StoryObj } from '@storybook/react';
import { ComponentHeader } from '../../main.ts';

const meta: Meta<typeof ComponentHeader> = {
  title: 'components/ComponentHeader',
  component: ComponentHeader,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof ComponentHeader>;

export const Default: Story = {
  args: {
    children: 'Button',
    storybookUrl: 'https://http://localhost:6006/?path=/story/components-button--default',
    gitlabUrl: 'https://gitlab.isaid.fr/Balanced436/balanced-ui/-/blob/master/src/components/button/Button.tsx',
  },
};
