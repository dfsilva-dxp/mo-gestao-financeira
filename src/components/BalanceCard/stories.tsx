import { Story, Meta } from "@storybook/react/types-6-0";
import { ComponentProps } from "react";

import BalanceCard from ".";

export default {
  title: "Components/BalanceCard",
  component: BalanceCard,
  argTypes: {
    color: {
      options: ["primary", "secondary"],
      control: {
        type: "inline-radio"
      }
    }
  },
  args: {
    title: "Saldo",
    balance: "R$8916,07",
    percentage: "+5%",
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

export const Basic: Story<ComponentProps<typeof BalanceCard>> = ({
  ...props
}) => <BalanceCard {...props} />;
