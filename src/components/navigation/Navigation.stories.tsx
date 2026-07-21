import type { Meta, StoryObj } from '@storybook/react';
import { Navigation, NavigationItem } from '../../main.ts';
import { NavigationList } from './Navigation.tsx';

const meta: Meta<typeof Navigation> = {
  title: 'Components/Navigation',
  component: Navigation,
  args: {
    // Set a default value for the control
    justify: 'flex-start',
    children: [
      <NavigationList>
        <NavigationItem key="1" href="/">
          Accueil
        </NavigationItem>
        <NavigationItem key="2" href="/about">
          À propos
        </NavigationItem>
        <NavigationItem key="3" href="/contact">
          Contact
        </NavigationItem>
      </NavigationList>,
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

export const Default: Story = {
  args: {
    justify: 'flex-start',
  },
};
