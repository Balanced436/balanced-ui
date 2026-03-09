import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../lib/main';

const meta: Meta<typeof Button> = {
  title: 'UI/Molecules',
  component: Button,
  tags: ['autodocs'],
  args: {
    children: 'Cliquez ici',
  },
  argTypes: {
    size: {
      control: { type: 'select' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Standard: Story = {
  args: {},
};
