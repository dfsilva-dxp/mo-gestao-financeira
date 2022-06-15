import { screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithTheme } from "utils/tests/helpers";

import DateInput from ".";

describe("<DateInput />", () => {
  it("should render with label", () => {
    const { container } = renderWithTheme(<DateInput />);

    expect(screen.getByLabelText(/jun\. de 2022/i)).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it("should is accessible by tab", () => {
    renderWithTheme(<DateInput />);

    const input = screen.getByLabelText(/jun\. de 2022/i);

    expect(document.body).toHaveFocus();

    userEvent.tab();
    expect(input).toHaveFocus();
  });

  it("should change display when change input value", () => {
    renderWithTheme(<DateInput />);

    const input = screen.getByLabelText(/data-filter/i);

    expect(input).toBeInTheDocument();

    fireEvent.change(input, { target: { value: "2022-07" } });

    expect(screen.getByLabelText(/jul\. de 2022/i)).toBeInTheDocument();
  });
});
