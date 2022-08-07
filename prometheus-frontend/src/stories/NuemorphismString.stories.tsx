import { ComponentStory, ComponentMeta } from "@storybook/react";

import NuemorphismString from "../components/Neumorphism/String";

export default {
  title: "Example/NuemorphismString",
  component: NuemorphismString,
  argTypes: {
    backgronudColor: { control: "color" },
  },
} as ComponentMeta<typeof NuemorphismString>;

const Template: ComponentStory<typeof NuemorphismString> = (args) => (
  <NuemorphismString {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  text: "Sample String",
};
