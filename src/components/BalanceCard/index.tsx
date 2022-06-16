import { TiChartLineOutline } from "react-icons/ti";

import { ProgressBar } from "components";

import {
  Balance,
  CardBody,
  Header,
  Icon,
  Percentage,
  Title,
  Wrapper
} from "./styles";
import { BalanceCardProps } from "./types";

export default function BalanceCard({
  title,
  balance,
  percentage,
  progressBar,
  color = "primary"
}: BalanceCardProps) {
  return (
    <Wrapper>
      <Header>
        <Title>{title}</Title>

        <Icon>
          <TiChartLineOutline />
        </Icon>
      </Header>

      <CardBody>
        <Balance>{balance}</Balance>

        {!!percentage && <Percentage>{percentage}</Percentage>}
      </CardBody>

      <ProgressBar progressBar={progressBar} color={color} />
    </Wrapper>
  );
}
