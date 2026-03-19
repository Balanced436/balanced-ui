import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from '../src/main';

interface ColorGridProps {
  title: string;
  prefix: string;
}

const ColorGrid = ({ title, prefix }: ColorGridProps) => {
  const steps = Array.from({ length: 14 }, (_, i) => i);

  return (
    <div style={{ marginBottom: '3rem' }}>
      <Typography variant='title-large' style={{ marginBottom: '1.5rem', display: 'block' }}>
        {title}
      </Typography>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
        {steps.map((step) => {
          const varName = `--base-color-${prefix}-${step}`;
          return (
            <div key={step} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{
                width: '120px',
                height: '48px',
                borderRadius: '4px',
                backgroundColor: `var(${varName})`,
                border: '1px solid rgba(128,128,128,0.2)'
              }} />
              <div style={{ flex: 1 }}>
                <code style={{ fontWeight: 'bold', fontSize: '0.9rem' }}>{varName}</code>
                <div style={{ fontSize: '0.75rem', opacity: 0.6 }}>
                  Step {step}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const meta: Meta = {
  title: 'Tokens/Colors',
  component: () => (
    <div style={{ padding: '2rem' }}>
      <ColorGrid title="Neutral Palette" prefix="neutral" />
      <ColorGrid title="Green Palette" prefix="green" />
      <ColorGrid title="Red Palette" prefix="red" />
    </div>
  ),
};

export default meta;
type Story = StoryObj;

export const AllPalettes: Story = {};

export const Neutral: Story = {
  render: () => <ColorGrid title="Neutral Palette" prefix="neutral" />,
};

export const Green: Story = {
  render: () => <ColorGrid title="Green Palette" prefix="green" />,
};

export const Red: Story = {
  render: () => <ColorGrid title="Red Palette" prefix="red" />,
};