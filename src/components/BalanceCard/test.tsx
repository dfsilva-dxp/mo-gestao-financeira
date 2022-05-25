import { screen } from "@testing-library/react";
import { renderWithTheme } from "utils/tests/helpers";

import BalanceCard from ".";

const props = {
  title: "Saldo",
  balance: "R$8916,07",
  percentage: "+5%",
  progressBar: 80
};

describe("<BalanceCard />", () => {
  it("should render the currectly", () => {
    const { container } = renderWithTheme(<BalanceCard {...props} />);

    expect(screen.getByRole("heading", { name: /saldo/i })).toBeInTheDocument();

    expect(screen.getByRole("heading", { name: /saldo/i })).toHaveStyle({
      color: "#797D9A"
    });

    expect(screen.getByText("R$8916,07")).toBeInTheDocument();
    expect(screen.getByText("+5%")).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  it("should render primary color by default", () => {
    renderWithTheme(<BalanceCard {...props} />);

    expect(
      screen.getByRole("progressbar", { name: /progress bar/i })
    ).toHaveStyleRule("background", "#F9769D", {
      modifier: "::after"
    });
  });

  it("should render #96A7FF when secondary color is passed", () => {
    renderWithTheme(<BalanceCard {...props} color="secondary" />);

    expect(
      screen.getByRole("progressbar", { name: /progress bar/i })
    ).toHaveStyleRule("background", "#96A7FF", {
      modifier: "::after"
    });
  });
});
