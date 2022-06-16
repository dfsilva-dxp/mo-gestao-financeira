import { Story, Meta } from "@storybook/react/types-6-0";
import { ComponentProps } from "react";

import FilterInputByDate from ".";

export default {
  title: "Components/FilterInputByDate",
  component: FilterInputByDate,
  argTypes: {},
  parameters: {
    layout: "centered"
  }
} as Meta;

export const Basic: Story<ComponentProps<typeof FilterInputByDate>> = () => (
  <FilterInputByDate />
);
