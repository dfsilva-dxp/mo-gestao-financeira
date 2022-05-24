import { Story, Meta } from "@storybook/react/types-6-0";
import { ComponentProps } from "react";

import Logo from ".";

export default {
  title: "Components/Logo",
  component: Logo,
  argTypes: {
    color: {
      options: ["white", "black"],
      control: {
        type: "inline-radio"
      }
    },
    size: {
      options: ["small", "medium", "large"],
      control: {
        type: "inline-radio"
      }
    }
  },
  args: {
    color: "white",
    size: "medium"
  },
  parameters: {
    layout: "centered"
  },
  decorators: [
    (Story) => (
      <div style={{ margin: "0 auto" }}>
        <Story />
      </div>
    )
  ]
} as Meta;

export const Default: Story<ComponentProps<typeof Logo>> = ({ ...props }) => (
  <Logo {...props} />
);
