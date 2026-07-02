import type { Meta, StoryObj } from '@storybook/react';
import { SideBar } from '../../main.ts';

const meta: Meta<typeof SideBar> = {
  title: 'Components/Sidebar',
  component: SideBar,
  tags: ['autodocs'],
  argTypes: {
    justify: {
      control: 'select',
      options: ['flex-start', 'center', 'flex-end'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof SideBar>;

export const Default: Story = {
  render: (args) => (
    <div>
      <SideBar {...args}>
        <SideBar.Item href={'/Home'}>Home</SideBar.Item>
        <SideBar.Item href={'/Balanced'}>Balanced</SideBar.Item>
        <SideBar.Item href={'/Music'}>Music</SideBar.Item>
      </SideBar>
      <div></div>
    </div>
  ),
};

export const Sections: Story = {
  render: (args) => (
    <div>
      <SideBar {...args}>
        <SideBar.Section title={'Custom apps'}>
          <SideBar.Item href={'/Balanced-ui'}>Balanced ui</SideBar.Item>
          <SideBar.Item href={'/Balanced-musicdl'}>Balanced musicdl</SideBar.Item>
          <SideBar.Item href={'/Music-music'}>Balanced music</SideBar.Item>
        </SideBar.Section>
        <SideBar.Section title={'Guide'}>
          <SideBar.Item href={'/Balanced-DSA'}>Balanced DSA</SideBar.Item>
        </SideBar.Section>
      </SideBar>
      <div></div>
    </div>
  ),
};
