import { Story, Meta } from "@storybook/react/types-6-0";
import { ComponentProps } from "react";

import DateInput from ".";

export default {
  title: "DateInput",
  component: DateInput,
  argTypes: {},
  parameters: {
    layout: "centered"
  }
} as Meta;

export const Basic: Story<ComponentProps<typeof DateInput>> = () => <DateInput />;
