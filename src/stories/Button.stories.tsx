import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../main.ts';
import { FaBeer, FaRegTrashAlt } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';

const iconMap = {
  None: undefined,
  Beer: <FaBeer />,
  Trash: <FaRegTrashAlt />,
  Close: <IoMdClose />,
};

const meta: Meta<typeof Button> = {
  title: 'components/Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string',
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'select' },
    },
    variant: {
      options: ['primary', 'danger', 'invisible'],
      control: { type: 'select' },
    },
    href: {
      control: { type: 'text' },
    },
    disabled: { type: 'boolean' },
    icon: {
      options: Object.keys(iconMap),
      mapping: iconMap,
      control: { type: 'select' },
    },
    leftIcon: {
      options: Object.keys(iconMap),
      mapping: iconMap,
      control: { type: 'select' },
    },
    rightIcon: {
      options: Object.keys(iconMap),
      mapping: iconMap,
      control: { type: 'select' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    variant: 'default',
    size: 'medium',
    children: 'Click here',
  },
};

export const Primary: Story = {
  args: {
    ...Default.args,
    variant: 'primary',
  },
};

export const Danger: Story = {
  args: {
    ...Default.args,
    variant: 'danger',
    children: 'Delete Account',
  },
};

export const Invisible: Story = {
  args: {
    ...Default.args,
    variant: 'invisible',
  },
};

export const Small: Story = {
  args: {
    ...Default.args,
    size: 'small',
  },
};

export const Medium: Story = {
  args: {
    ...Default.args,
    size: 'medium',
  },
};

export const Large: Story = {
  args: {
    ...Default.args,
    size: 'large',
  },
};

export const IconOnly: Story = {
  args: {
    variant: 'invisible',
    icon: 'Close',
    children: undefined,
  },
};

export const WithLeftIcon: Story = {
  args: {
    ...Default.args,
    leftIcon: 'Beer',
    children: 'Cheers',
  },
};

export const WithRightIcon: Story = {
  args: {
    ...Default.args,
    rightIcon: 'Trash',
    variant: 'danger',
    children: 'Trash Item',
  },
};

export const WithBothIcons: Story = {
  args: {
    ...Default.args,
    leftIcon: 'Beer',
    rightIcon: 'Close',
    children: 'Close Bar',
  },
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
};

export const AsLink: Story = {
  args: {
    ...Default.args,
    href: 'https://example.com',
    children: 'Go to Website',
  },
};

export const IsLoading: Story = {
  args: {
    ...Default.args,
    loading: true,
  },
};
