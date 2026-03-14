import type { Meta, StoryObj } from '@storybook/react';
import { Navigation, NavigationItem } from '../src/main';

const meta: Meta<typeof Navigation> = {
  title: 'UI/Molecules/Navigation',
  component: Navigation,
  tags: ['autodocs'],
  args: {
    // Set a default value for the control
    justify: 'left', 
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
      options: ['left', 'center', 'right'],
      description: 'Aligns the navigation items horizontally',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Navigation>;

export const Standard: Story = {
  args: {
    justify: 'flex-start',
  },
};

export const Centered: Story = {
  args: {
    justify: 'center',
  },
};

export const RightAligned: Story = {
  args: {
    justify: 'flex-end',
  },
};