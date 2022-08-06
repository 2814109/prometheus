import { ComponentStory, ComponentMeta } from "@storybook/react";

import RoundedSideButton from "../components/Neumorphism/RoundedSideButton/index";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/RoundedSideButton",
  component: RoundedSideButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof RoundedSideButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof RoundedSideButton> = (args) => (
  <RoundedSideButton {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  name: "Button",
  isLoading: true,
};

export const Secondary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Secondary.args = {
  name: "Button",
  isLoading: false,
};
