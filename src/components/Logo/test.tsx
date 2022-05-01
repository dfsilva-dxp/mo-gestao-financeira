import { screen } from "@testing-library/react";

import { renderWithTheme } from "utils/tests/helpers";

import Logo from ".";

describe("<Logo />", () => {
  it("should render a currectly logo", () => {
    const { container } = renderWithTheme(<Logo />);

    expect(screen.getByRole("img", { name: /Mo app/i })).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it("should render a white label by default", () => {
    renderWithTheme(<Logo />);

    expect(screen.getByLabelText(/mo app/i).parentElement).toHaveStyle({
      color: "#FFF"
    });
  });

  it("should render a black label when color black is passed", () => {
    renderWithTheme(<Logo color="black" />);

    expect(screen.getByLabelText(/mo app/i).parentElement).toHaveStyle({
      color: "#030517"
    });
  });

  it("should render a small when size is passed", () => {
    renderWithTheme(<Logo size="small" />);

    expect(screen.getByLabelText(/mo app/i).parentElement).toHaveStyle({
      width: "4rem"
    });
  });

  it("should render a medium size by default", () => {
    renderWithTheme(<Logo />);

    expect(screen.getByLabelText(/mo app/i).parentElement).toHaveStyle({
      width: "5rem"
    });
  });

  it("should render a large when large is passed", () => {
    renderWithTheme(<Logo size="large" />);

    expect(screen.getByLabelText(/mo app/i).parentElement).toHaveStyle({
      width: "6.5rem"
    });
  });
});
