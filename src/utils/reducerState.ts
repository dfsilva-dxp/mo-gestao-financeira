import { DefaultValues } from "components/FilterInputByDate/types";

const reducer = (prevState: DefaultValues, newState: DefaultValues) => ({
  ...prevState,
  ...newState
});

export default reducer;
