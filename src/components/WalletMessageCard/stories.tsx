import { Story, Meta } from "@storybook/react/types-6-0";
import { ComponentProps } from "react";

import WalletMessageCard from ".";

export default {
  title: "WalletMessageCard",
  component: WalletMessageCard,
  argTypes: {},
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

export const Basic: Story<ComponentProps<typeof WalletMessageCard>> = () => (
  <WalletMessageCard />
);
