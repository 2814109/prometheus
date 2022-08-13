import { ComponentStory, ComponentMeta } from "@storybook/react";

import Rosetta from "../components/Form/Label";

export default {
  title: "Example/Rosetta",
  component: Rosetta,
} as ComponentMeta<typeof Rosetta>;

const Template: ComponentStory<typeof Rosetta> = (args) => (
  <Rosetta {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  text: "rosetta string",
};
