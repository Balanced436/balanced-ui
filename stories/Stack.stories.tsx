import { StoryFn } from "@storybook/react";

import { Stack } from "../lib/main";

const meta = {
  title: "UI/Stack",
  component: Stack,
  tags: ["autodocs"],
  args: {
    count: 3
  },
  argTypes: {
    count: {
      control: { type: "number", min: 1, max: 10 },
      description: "Nombre de divs à afficher dans le Stack",
    },
  },
};

type StackStoryArgs = React.ComponentProps<typeof Stack> & {
  count?: number;
};
export default meta;

const Template: StoryFn<typeof Stack> = (args: StackStoryArgs) => {
  const childrenArray = Array.from({ length: args.count || 1 }, (_, i) => (
    <div style={{ background: "lightgray", padding: "8px", border: "1px solid #ccc", height: "50px", width: "50px" }} key={i}>{i}</div>
  ));

  return <Stack {...args}>{childrenArray}</Stack>;
};

export const Standard = Template.bind({});
Standard.args = {
  count: 5,
};