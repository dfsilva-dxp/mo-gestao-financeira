import Image from "next/image";

import Logo from "components/Logo";

import {
  Balance,
  CardFooter,
  CardInfo,
  CardNumber,
  Info,
  Title,
  Wrapper
} from "./styles";
import { CardProps } from "./types";

export default function Card({ balance }: CardProps) {
  return (
    <Wrapper>
      <CardInfo>
        <Info>
          <Title>Carteira</Title>
          <Balance>{balance}</Balance>
        </Info>

        <Logo size="small" />
      </CardInfo>

      <CardFooter>
        <CardNumber>**** **** **** 2376</CardNumber>
        <Image
          src="/img/card-brand.svg"
          aria-label="Card Brand"
          width="35"
          height="20"
        />
      </CardFooter>
    </Wrapper>
  );
}
