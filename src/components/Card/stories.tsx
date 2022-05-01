import { Story, Meta } from "@storybook/react/types-6-0";
import { ComponentProps } from "react";

import Card from ".";

export default {
  title: "Components/Card",
  component: Card,
  args: {
    balance: "R$1060,00"
  },
  parameters: {
    layout: "centered"
  }
} as Meta;

export const Basic: Story<ComponentProps<typeof Card>> = ({ ...props }) => (
  <Card {...props} />
);
