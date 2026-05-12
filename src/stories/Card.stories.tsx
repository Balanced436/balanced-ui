import type { Meta, StoryObj } from '@storybook/react';
import { Card } from '../main.ts';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: false,
      description: 'The internal compound components of the Card (Title, Body, Footer)',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: (args) => (
    <Card {...args}>
      <Card.Title>CPU Usage</Card.Title>
      <Card.SubTitle>Overview</Card.SubTitle>
      <Card.Body>The CPU usage is currently at 12%. The server is running smoothly without any interruptions.</Card.Body>
      <Card.Footer>Last updated: 2 minutes ago</Card.Footer>
    </Card>
  ),
};
