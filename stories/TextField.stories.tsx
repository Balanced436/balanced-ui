import { StoryFn } from "@storybook/react";

import {Button, Stack} from "../lib/main";
import {TextField} from "../lib/components/atoms/TextField";

const meta = {
  title: "UI/TextField",
  component: TextField,
  tags: ["autodocs"],
  args: {
    count: 3,
    placeholder: "Exemple placeholder"
  },
  argTypes: {
    count: {},
  },
};


export default meta;

const Template: StoryFn<typeof TextField> = (args) => {
  return <TextField placeholder = {args.placeholder}></TextField>
};

export const Standard = Template.bind({});
Standard.args = {
  count: 5,
};

export const Placeholder = Template.bind({});
Standard.args = {
  count: 5,
};