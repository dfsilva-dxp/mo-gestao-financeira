import { screen } from "@testing-library/react";
import { renderWithTheme } from "utils/tests/helpers";

import ProgressBar from ".";

const props = {
  progressBar: 80
};

describe("<ProgressBar />", () => {
  it("should render primary color by default", () => {
    const { container } = renderWithTheme(<ProgressBar {...props} />);

    expect(
      screen.getByRole("progressbar", { name: /progress bar/i })
    ).toHaveStyleRule("background", "#F9769D", {
      modifier: "::after"
    });

    expect(container.firstChild).toMatchSnapshot();
  });

  it("should render #96A7FF when secondary color is passed", () => {
    renderWithTheme(<ProgressBar {...props} color="secondary" />);

    expect(
      screen.getByRole("progressbar", { name: /progress bar/i })
    ).toHaveStyleRule("background", "#96A7FF", {
      modifier: "::after"
    });
  });
});
