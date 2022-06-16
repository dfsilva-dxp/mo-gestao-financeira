import { screen } from "@testing-library/react";
import { renderWithTheme } from "utils/tests/helpers";

import ChartCategories from ".";

import categories from "./mock";

jest.mock("components/FilterInputByDate", () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock FilterInputByDate" />;
  }
}));

describe("<ChartCategories />", () => {
  it("should render currectly", () => {
    renderWithTheme(<ChartCategories categories={categories} />);

    expect(
      screen.getByRole("heading", { name: /gastos por categoria/i })
    ).toBeInTheDocument();

    expect(screen.getByTestId("Mock FilterInputByDate")).toBeInTheDocument();

    expect(screen.getByText("Alimentação:")).toBeInTheDocument();
    expect(screen.getByText("R$623,12")).toBeInTheDocument();
  });
});
