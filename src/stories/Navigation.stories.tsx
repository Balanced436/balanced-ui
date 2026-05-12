import type { Meta, StoryObj } from '@storybook/react';
import { Navigation, NavigationItem } from '../main.ts';

const meta: Meta<typeof Navigation> = {
  title: 'Components/Navigation',
  component: Navigation,
  tags: ['autodocs'],
  args: {
    // Set a default value for the control
    justify: 'flex-start',
    children: [
      <NavigationItem key="1" href="/">
        Accueil
      </NavigationItem>,
      <NavigationItem key="2" href="/about">
        À propos
      </NavigationItem>,
      <NavigationItem key="3" href="/contact">
        Contact
      </NavigationItem>,
    ],
  },
  argTypes: {
    children: { table: { disable: true } },
    // Explicitly define the control for the justify prop
    justify: {
      control: 'inline-radio',
      options: ['flex-start', 'center', 'flex-end'],
      description: 'Aligns the navigation items horizontally',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Navigation>;

export const Standard: Story = {
  args: {
    justify: 'flex-start',
    position: 'relative',
    orientation: 'horizontal',
  },
};

export const Centered: Story = {
  args: {
    justify: 'center',
    position: 'relative',
    orientation: 'horizontal',
  },
};

export const RightAligned: Story = {
  args: {
    justify: 'flex-end',
    position: 'relative',
    orientation: 'horizontal',
  },
};
