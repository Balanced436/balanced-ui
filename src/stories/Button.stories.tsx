import type { Meta, StoryObj } from '@storybook/react';
import { Button, Typography } from '../main.ts';
import { FaBeer } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';

const meta: Meta<typeof Button> = {
  title: 'components/Button',
  component: Button,
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
    },
    href: {
      control: { type: 'text' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Showcase: Story = {
  args: {
    variant: 'invisible',
  },

  render: (args) => {
    const variants = ['default', 'primary', 'danger', 'invisible'] as const;
    const sizes = ['small', 'medium', 'large'] as const;
    const states = [
      { disabled: false, label: 'Rest' },
      { disabled: true, label: 'Disabled' },
    ];

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
        {sizes.map((size) => (
          <div key={size} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <Typography variant="body-medium" style={{ textTransform: 'capitalize' }}>
              {size}
            </Typography>

            <div style={{ display: 'flex', flexDirection: 'row', gap: '2rem', flexWrap: 'wrap' }}>
              {variants.map((variant) => (
                <div key={`${size}-${variant}`} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {states.map((state) => (
                      <div key={state.label} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                        <Button {...args} size={size} variant={variant} disabled={state.disabled} style={{ textTransform: 'capitalize' }}>
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
  },
};

export const Primary: Story = {
  args: { variant: 'primary' },
};

export const Danger: Story = {
  args: { variant: 'danger' },
};

export const Invisible: Story = {
  args: { variant: 'invisible' },
};

export const Href: Story = {
  args: { href: '/home' },
};

export const LeftIcon: Story = {
  render: (args) => {
    return (
      <div>
        <Button leftIcon={<FaBeer />}>Beer</Button>
      </div>
    );
  },
};

export const RightIcon: Story = {
  render: (args) => {
    return (
      <div>
        <Button variant={'danger'} rightIcon={<IoMdClose />}>
          Close
        </Button>
      </div>
    );
  },
};

export const Icon: Story = {
  render: (args) => {
    return (
      <div>
        <Button aria-label={'close button'} variant={'danger'} icon={<IoMdClose />}></Button>
      </div>
    );
  },
};
