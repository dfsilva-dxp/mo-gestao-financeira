import { DefaultValues } from "components/DateInput/types";

const reducer = (prevState: DefaultValues, newState: DefaultValues) => ({
  ...prevState,
  ...newState
});

export default reducer;
