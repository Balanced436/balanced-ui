import { StoryFn } from "@storybook/react";

import { Button } from "../lib/main";

const meta = {
  title: "UI/CorpusesUI",
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
const Template: StoryFn<typeof Button> = (args) => <Button {...args}>{args.children}</Button>;

export const Standard = Template.bind({});
Standard.args = {};