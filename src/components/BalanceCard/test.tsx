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
    expect(
      screen.getByRole("progressbar", { name: /progress bar/i })
    ).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});
