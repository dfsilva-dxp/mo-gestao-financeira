import { Story, Meta } from "@storybook/react/types-6-0";
import { ComponentProps } from "react";

import DateInputFilter from ".";

export default {
  title: "Components/DateInputFilter",
  component: DateInputFilter,
  argTypes: {},
  parameters: {
    layout: "centered"
  }
} as Meta;

export const Basic: Story<ComponentProps<typeof DateInputFilter>> = () => (
  <DateInputFilter />
);
