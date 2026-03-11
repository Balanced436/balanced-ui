import type { Meta, StoryObj } from '@storybook/react';
import { Navigation, NavigationItem } from '../src/main';

const meta: Meta<typeof Navigation> = {
  title: 'UI/Molecules/Navigation',
  component: Navigation,
  tags: ['autodocs'],
  args: {
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
  },
};

export default meta;

type Story = StoryObj<typeof Navigation>;

export const Standard: Story = {
  args: {},
};
