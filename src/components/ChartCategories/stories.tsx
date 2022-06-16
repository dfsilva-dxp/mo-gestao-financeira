import { Story, Meta } from "@storybook/react/types-6-0";
import { ComponentProps } from "react";

import ChartCategories from ".";

import categories from "./mock";

export default {
  title: "Components/ChartCategories",
  component: ChartCategories,
  argTypes: {},
  args: {
    categories
  },
  parameters: {
    layout: "centered"
  },
  decorators: [
    (Story) => (
      <div style={{ width: "34rem" }}>
        <Story />
      </div>
    )
  ]
} as Meta;

export const Basic: Story<ComponentProps<typeof ChartCategories>> = ({
  ...props
}) => <ChartCategories {...props} />;
