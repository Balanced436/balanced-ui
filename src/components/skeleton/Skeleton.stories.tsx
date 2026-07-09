import type { Meta, StoryObj } from '@storybook/react';
import { Skeleton } from '../../main.ts';

const meta: Meta<typeof Skeleton> = {
  title: 'Components/Skeleton',
  component: Skeleton,
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {};

export const Lines: Story = {
  render: (args) => {
    return (
      <div>
        <Skeleton variant={'text'} />
        <Skeleton variant={'text'} />
      </div>
    );
  },
};
