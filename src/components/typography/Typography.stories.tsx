import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from '../../main.ts';

const elementTypeMap = {
  None: undefined,
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  span: 'span',
  div: 'div',
};

const meta: Meta<typeof Typography> = {
  title: 'Component/Typography',
  component: Typography,
  argTypes: {
    variant: {
      control: 'select',
      description: 'The visual style of the text',
      options: ['display', 'title-large', 'title-medium', 'title-small', 'subtitle', 'body-large', 'body-medium', 'body-small', 'caption'],
    },
    children: {
      type: 'string',
    },
    as: {
      options: Object.keys(elementTypeMap),
      mapping: elementTypeMap,
      control: { type: 'select' },
    },
  },
  args: {
    children: 'Lorem ipsum dolor sit amet',
  },
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const Default: Story = {
  args: { variant: 'display' },
};
