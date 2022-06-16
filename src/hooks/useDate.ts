import { useCallback } from "react";
import moment from "moment";

type FormatProps = {
  date: string | Date;
  locale?: "pt-br" | "en" | "en-gb";
  pattern: "MMM. [de] YYYY" | "YYYY-MM" | "DD-MM-YYYY";
};

type DateReturn = {
  format: ({ date, locale }: FormatProps) => string;
};

const useDate = (): DateReturn => {
  const format = useCallback(
    ({ date, locale = "pt-br", pattern }: FormatProps) => {
      return moment(date).locale(locale).format(pattern);
    },
    []
  );

  return { format };
};

export default useDate;
