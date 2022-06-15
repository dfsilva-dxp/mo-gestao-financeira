import { ChangeEvent, useEffect, useReducer } from "react";

import { useDate } from "hooks";

import { reducer } from "utils";

import { Label, Wrapper } from "./styles";
import { DefaultValues } from "./types";

const INITIAL_VALUES: DefaultValues = {
  default: "2020-01",
  formatted: "jan. de 2020"
};

export default function DateInputFilter() {
  const [date, setDate] = useReducer(reducer, INITIAL_VALUES);

  const { format } = useDate();

  useEffect(() => {
    const d = new Date();

    const formatted = format({
      date: d,
      locale: "pt-br",
      pattern: "MMM. [de] YYYY"
    });

    const defaultValue = format({
      date: d,
      locale: "pt-br",
      pattern: "YYYY-MM"
    });

    setDate({
      default: defaultValue,
      formatted
    });
  }, [format]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    const formatted = format({
      date: value,
      locale: "pt-br",
      pattern: "MMM. [de] YYYY"
    });

    setDate({
      default: value,
      formatted
    });
  };

  return (
    <Wrapper>
      <Label htmlFor="date-filter">{date.formatted}</Label>
      <input
        type="month"
        name="date-filter"
        id="date-filter"
        aria-label="data-filter"
        value={date.default}
        onChange={handleChange}
      />
    </Wrapper>
  );
}
