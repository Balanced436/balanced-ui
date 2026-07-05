import type { Meta, StoryObj } from '@storybook/react';
import { Separator } from './Separator';
import { Typography } from '../../main.ts';

const meta: Meta<typeof Separator> = {
  title: 'components/Separator',
  component: Separator,
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
    variant: {
      control: 'select',
      options: ['fullSize', 'middle'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Separator>;

export const HorizontalUsage: Story = {
  args: {
    orientation: 'horizontal',
    variant: 'fullSize',
  },
  render: (args) => {
    return (
      <div style={{ width: '200px', border: '1px solid #ccc' }}>
        <Typography>Item 1</Typography>
        <Separator {...args} />
        <Typography>Item 2</Typography>
      </div>
    );
  },
};

export const VerticalUsage: Story = {
  args: {
    orientation: 'vertical',
    variant: 'middle',
  },
  render: (args) => {
    return (
      <div style={{ display: 'flex', border: '1px solid #ccc' }}>
        <Typography>Item 1</Typography>
        <Separator {...args} />
        <Typography>Item 2</Typography>
      </div>
    );
  },
};
