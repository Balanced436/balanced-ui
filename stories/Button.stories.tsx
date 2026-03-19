import type { Meta, StoryObj } from '@storybook/react';
import { Button, Typography } from '../src/main';

const meta: Meta<typeof Button> = {
  title: 'UI/Molecules/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    children: 'Cliquez ici',
  },
  argTypes: {
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'select' },
    },
    variant: {
      options: ['primary', 'danger', 'invisible'],
      control: { type: 'select' },
    }
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Showcase: Story = {
  render: (args) => {
    const variants = ['default', 'primary', 'danger', 'invisible'] as const;
    const sizes = ['small', 'medium', 'large'] as const;
    const states = [
      { disabled: false, label: 'Rest' },
      { disabled: true, label: 'Disabled' }
    ];

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
        {sizes.map((size) => (
          <div key={size} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <Typography variant='body-medium' style={{textTransform: 'capitalize'}}>{size}</Typography>

            <div style={{ display: 'flex', flexDirection: 'row', gap: '2rem', flexWrap: 'wrap' }}>
              {variants.map((variant) => (
                <div key={`${size}-${variant}`} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {states.map((state) => (
                      <div key={state.label} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                        <Button
                          {...args}
                          size={size}
                          variant={variant}
                          disabled={state.disabled}
                          style={{ textTransform: 'capitalize' }}
                        >
                          {variant}
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }
};

export const Primary: Story = {
  args: { variant: "primary" },
};

export const Danger: Story = {
  args: { variant: "danger" },
};

export const Invisible: Story = {
  args: { variant: "invisible" },
};