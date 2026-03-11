import type { Meta, StoryObj } from '@storybook/react';
import { Navigation } from '../src/main';

const meta: Meta<typeof Navigation> = {
  title: 'UI/Molecules/Navigation',
  component: Navigation,
  tags: ['autodocs'],
  args: {
    items: [{"label": "Accueil", "href": "/"}, {"label": "À propos", "href": "/about"}, {"label": "Contact", "href": "/contact"}],
  },
  argTypes: {

  },
};

export default meta;

type Story = StoryObj<typeof Navigation>;

export const Standard: Story = {
  args: {},
};
