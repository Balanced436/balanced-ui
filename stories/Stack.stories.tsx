import type { Meta, StoryObj } from '@storybook/react';
import  { Stack } from '../src/main.ts';


const meta: Meta<typeof Stack> = {
  title: 'Layout/Stack',
  component: Stack,
  tags: ['autodocs'],
  argTypes: {
    direction: {
      control: 'select',
      options: ['row', 'column', 'row-reverse', 'column-reverse'],
    },
    justifyContent: {
      control: 'select',
      options: ['flex-start', 'center', 'flex-end', 'space-between', 'space-around'],
    },
    gap: {
      control: { type: 'number', min: 0, max: 100, step: 4 },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Stack>;

// Story par défaut (Horizontal)
export const Horizontal: Story = {
  args: {
    direction: 'row',
    gap: 16,
    justifyContent: 'flex-start',
    children: (
      <>
        <span>Premier</span>
        <span>Deuxième</span>
        <span>Troisième</span>
      </>
    ),
  },
};

// Story Verticale
export const Vertical: Story = {
  args: {
    ...Horizontal.args,
    direction: 'column',
  },
};

// Story avec espacement important
export const SpacedOut: Story = {
  args: {
    direction: 'row',
    justifyContent: 'space-between',
    gap: 0, // Le space-between gère l'espace ici
    children: (
      <>
        <div style={{ padding: '10px', background: 'var(--color-blue)', color: 'white' }}>Gauche</div>
        <div style={{ padding: '10px', background: 'var(--color-blue)', color: 'white' }}>Droite</div>
      </>
    ),
  },
};
