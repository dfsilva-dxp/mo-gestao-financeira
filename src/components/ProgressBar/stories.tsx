import { Story, Meta } from "@storybook/react/types-6-0";
import { ComponentProps } from "react";

import ProgressBar from ".";

export default {
  title: "Components/ProgressBar",
  component: ProgressBar,
  argTypes: {
    color: {
      options: ["primary", "secondary"],
      control: {
        type: "inline-radio"
      }
    }
  },
  args: {
    progressBar: 80,
    color: "primary"
  },
  parameters: {
    layout: "centered"
  },
  decorators: [
    (Story) => (
      <div style={{ margin: "0 auto", width: "47.6rem" }}>
        <Story />
      </div>
    )
  ]
} as Meta;

export const Default: Story<ComponentProps<typeof ProgressBar>> = ({
  ...props
}) => <ProgressBar {...props} />;
