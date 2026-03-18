import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from '../src/main';

const NeutralPalette = () => {
  const steps = Array.from({ length: 14 }, (_, i) => i);

  return (
    <div>
        <Typography variant='title-large'>Neutral Palette</Typography>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
        {steps.map((step) => {
          const varName = `--base-color-neutral-${step}`;
          return (
            <div key={step} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{
                width: '100px',
                height: '48px',
                borderRadius: '4px',
                backgroundColor: `var(${varName})`,
                border: '1px solid rgba(128,128,128,0.2)'
              }} />
              <div style={{ flex: 1 }}>
                <code style={{ fontWeight: 'bold' }}>{varName}</code>
                <div style={{ fontSize: '0.8rem', opacity: 0.6 }}>
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

const meta: Meta<typeof NeutralPalette> = {
  title: 'Tokens/Colors',
  component: NeutralPalette,
};

export default meta;
type Story = StoryObj<typeof NeutralPalette>;

export const Neutral: Story = {

};
