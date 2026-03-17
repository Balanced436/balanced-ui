import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from '../src/main';

const PLACEHOLDER = 'Lorem ipsum dolor sit amet';

const meta: Meta<typeof Typography> = {
  title: 'Components/Typography',
  component: Typography,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      description: 'The visual style of the text',
      options: [
        'display', 
        'title-large', 'title-medium', 'title-small',
        'subtitle',
        'body-large', 'body-medium', 'body-small',
        'caption'
      ],
    },
  },
  args: {
    children: PLACEHOLDER,
  },
};

export default meta;
type Story = StoryObj<typeof Typography>;


export const Display: Story = {
  args: { variant: 'display' },
};


export const TitleLarge: Story = {
  args: { variant: 'title-large' },
};

export const TitleMedium: Story = {
  args: { variant: 'title-medium' },
};

export const TitleSmall: Story = {
  args: { variant: 'title-small' },
};


export const SubTitle: Story = {
  args: { variant: 'subtitle' },
};


export const BodyLarge: Story = {
  args: { variant: 'body-large' },
};

export const BodyMedium: Story = {
  args: { variant: 'body-medium' },
};

export const BodySmall: Story = {
  args: { variant: 'body-small' },
};


export const Caption: Story = {
  args: { variant: 'caption' },
};


export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <section>
        <p style={{ color: '#888' }}>DISPLAY</p>
        <Typography variant="display">{PLACEHOLDER}</Typography>
      </section>

      <section>
        <p style={{ color: '#888' }}>TITLES</p>
        <Typography variant="title-large">Title Large (H1) - {PLACEHOLDER}</Typography>
        <Typography variant="title-medium">Title Medium (H2) - {PLACEHOLDER}</Typography>
        <Typography variant="title-small">Title Small (H3) - {PLACEHOLDER}</Typography>
      </section>

      <section>
        <p style={{ color: '#888' }}>SUBTITLE</p>
        <Typography variant="subtitle">{PLACEHOLDER}</Typography>
      </section>

      <section>
        <p style={{ color: '#888' }}>BODY</p>
        <Typography variant="body-large">Body Large - {PLACEHOLDER}</Typography>
        <Typography variant="body-medium">Body Medium - {PLACEHOLDER}</Typography>
        <Typography variant="body-small">Body Small - {PLACEHOLDER}</Typography>
      </section>

      <section>
        <p style={{ color: '#888' }}>CAPTION</p>
        <Typography variant="caption">{PLACEHOLDER}</Typography>
      </section>
    </div>
  ),
};