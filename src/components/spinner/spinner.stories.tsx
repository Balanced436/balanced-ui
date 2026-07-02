import type { Meta, StoryObj } from '@storybook/react';
import { Spinner } from '../../main.ts';

const meta: Meta<typeof Spinner> = {
  title: 'components/Spinner',
  component: Spinner,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Spinner>;

export const Default: Story = {
  args: {},
};
