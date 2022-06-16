import { FilterInputByDate } from "components";

import { random } from "utils";

import {
  Amout,
  Body,
  Category,
  Header,
  Item,
  ProgressBar,
  Title,
  Wrapper
} from "./styles";
import { ChartCategoriesProps } from "./types";

import colors from "./colors";

export default function ChartCategories({ categories }: ChartCategoriesProps) {
  random(colors);
  return (
    <Wrapper>
      <Header>
        <Title>Gastos por categoria</Title>
        <FilterInputByDate />
      </Header>

      <Body>
        {categories.map((item) => (
          <Item key={item.category}>
            <Category>{item.category}:</Category>
            <Amout>{item.amount}</Amout>
            <ProgressBar
              color={colors[random(colors)]}
              percentage={item.percentage}
            />
          </Item>
        ))}
      </Body>
    </Wrapper>
  );
}
