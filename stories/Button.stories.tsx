import { StoryFn } from "@storybook/react";

import { Button } from "../lib/main";
import {JSX} from "react";

const meta = {
  title: "UI/Atoms",
  component: Button,
  tags: ["autodocs"],
  args: {
    children: "Cliquez ici",
  },
  argTypes: {
    size: {
      control: { type: "select" },
    },
  },
};

export default meta;

// The corrected and completed line:
const Template: (args) => JSX.Element = (args) => <Button {...args}>{args.children}</Button>;

export const Standard = Template.bind({});
Standard.args = {};