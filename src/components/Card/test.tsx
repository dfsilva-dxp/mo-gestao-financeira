import { screen } from "@testing-library/react";

import { renderWithTheme } from "utils/tests/helpers";

import Card from ".";

describe("<Card />", () => {
  it("should render currectly", () => {
    const { container } = renderWithTheme(<Card balance="R$1060,00" />);

    expect(
      screen.getByRole("heading", { name: /carteira/i })
    ).toBeInTheDocument();

    expect(screen.getByText("R$1060,00")).toBeInTheDocument();

    expect(screen.getByRole("img", { name: /mo app/i })).toBeInTheDocument();

    expect(
      screen.getByRole("img", { name: /mo app/i }).parentElement
    ).toHaveStyle({
      width: "4rem"
    });

    expect(container.firstChild).toMatchSnapshot();
  });
});
