import { screen } from "@testing-library/react";
import { renderWithTheme } from "utils/tests/helpers";

import WalletMessageCard from ".";

describe("<WalletMessageCard />", () => {
  it("should render currectly", () => {
    const { container } = renderWithTheme(<WalletMessageCard />);

    expect(
      screen.getByText(/Muito bem, sua carteira está positiva!/i).parentElement
    ).toHaveStyle({
      background:
        "linear-gradient(145deg, rgba(33,34,45,1) 0%, rgba(58,44,58,1) 100%)",
      width: "34rem"
    });

    expect(
      screen.getByText(/Muito bem, sua carteira está positiva!/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/Muito bem, sua carteira está positiva!/i)
    ).toHaveStyle({
      "font-size": "1.4rem"
    });

    expect(
      screen.getByText(/Considere investir o seu saldo!/i)
    ).toBeInTheDocument();

    expect(screen.getByText(/Considere investir o seu saldo!/i)).toHaveStyle({
      color: "#797D9A",
      "font-size": "1.3rem"
    });

    expect(container.firstChild).toMatchSnapshot();
  });
});
