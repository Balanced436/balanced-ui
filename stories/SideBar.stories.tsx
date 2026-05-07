import type { Meta, StoryObj } from '@storybook/react';
import { SideBarItem, SideBar } from '../src/main.ts';

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
      <SideBar {...args} >
        <SideBarItem href={"/Home"}>Home</SideBarItem>
        <SideBarItem href={"/Balanced"}>Balanced</SideBarItem>
        <SideBarItem href={"/Music"}>Music</SideBarItem>
      </SideBar>
      <div>
      </div>
    </div>
  ),
};
